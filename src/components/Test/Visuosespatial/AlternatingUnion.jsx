import React, { useEffect, useRef } from 'react'
import unionImg from '../../../../public/union.png'
import cubeImg from '../../../../public/cube-task.png'
import clockImg from '../../../../public/clock-task.png'
import '../styles/AlterningUnion.css'

const AlternatingUnion = ({ score, taskId, setTaskId }) => {
    const $canvas = useRef();
    const $canvasContainer = useRef();
    const imagesCanvas = [unionImg, cubeImg, clockImg];

    const calculateScore = errorProbability => {
        const random = Math.random();

        if (random <= errorProbability) return 0;

        return 1
    };

    const handlerSendTask = e => {
        score.push({
            taskId,
            score: taskId === 3 ? [calculateScore(0.1), calculateScore(0.2), calculateScore(0.3)] : taskId === 2 ? calculateScore(0.15) : calculateScore(0.1),
        });
        
        setTaskId(taskId + 1);
    };

    useEffect(() => {
        const context = $canvas.current.getContext('2d');
        const unionImgElement = new Image();
        let initialX;
        let initialY;

        const drawImg = e => {
            if (taskId === 1) {
                context.drawImage(unionImgElement, 0, 0, $canvasContainer.current.clientWidth, 0.9375 * $canvasContainer.current.clientWidth);
            } else if (taskId === 2) {
                context.drawImage(unionImgElement, 0, 0, 0.5 * $canvasContainer.current.clientWidth, 0.59 * 0.5 * $canvasContainer.current.clientWidth);
            } else if (taskId === 3){
                context.drawImage(unionImgElement, 0, 0, $canvasContainer.current.clientWidth, 0.12 * $canvasContainer.current.clientWidth);
            }
        };

        const drawing = (cursorX, cursorY) => {
            context.beginPath();
            context.moveTo(initialX, initialY);
            context.lineWidth = 2;
            context.strokeStyle = "red";
            context.lineCap = "round";
            context.lineJoin = "round";
            context.lineTo(cursorX, cursorY);
            context.stroke();

            initialX = cursorX;
            initialY = cursorY;
        };
        
        const mouseMoving = e => {
            e.preventDefault();
            e.stopPropagation();
            
            drawing(e.offsetX, e.offsetY);
        };

        const mouseDown = e => {
            initialX = e.offsetX;
            initialY = e.offsetY;
            drawing(initialX, initialY);
            $canvas.current.addEventListener("mousemove", mouseMoving);
        };

        const mouseUp = () => {
            context.closePath();
            $canvas.current.removeEventListener("mousemove", mouseMoving);
        };

        const touchParse = e => {
            const touch = e.touches[0];
            const mouseType = e.type === 'touchstart' ? 'mousedown' : 'mousemove'
            const mouseEvent = new MouseEvent(mouseType, {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            $canvas.current.dispatchEvent(mouseEvent);
        };

        const resizeWindow = e => {
            $canvas.current.width = $canvasContainer.current.clientWidth;
            $canvas.current.height = 0.9375 * $canvasContainer.current.clientWidth;
            drawImg();
        };
        
        $canvas.current.width = $canvasContainer.current.clientWidth;
        $canvas.current.height = 0.9375 * $canvasContainer.current.clientWidth;
        unionImgElement.src = imagesCanvas[taskId - 1];
        window.addEventListener('resize', resizeWindow);
        unionImgElement.addEventListener('load', drawImg);
        $canvas.current.addEventListener("mousedown", mouseDown);
        $canvas.current.addEventListener("mouseup", mouseUp);
        $canvas.current.addEventListener('touchmove', touchParse);
        $canvas.current.addEventListener('touchstart', touchParse);

        return () => {
            window.removeEventListener('resize', resizeWindow);
        }
    });

    return (
        <div className="alternating-union" ref={$canvasContainer}>
            <canvas
                ref={$canvas}
                id='alternating-union-canvas'
                width='0'
                height='0'
            ></canvas>
            <button className='Test-btn--next' onClick={handlerSendTask}>Enviar respuesta</button>
        </div>
    )
}

export default AlternatingUnion