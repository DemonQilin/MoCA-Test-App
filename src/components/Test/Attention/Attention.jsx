import React from 'react'
import NumberSequence from './NumberSequence'

const Attention = ({ score, setTaskId, taskId }) => {
    return (
        <div className="Attention">
            {
                taskId === 7
                    ? <NumberSequence score={score} setTaskId={setTaskId} taskId={taskId} />
                    : taskId === 8
                        ? <div>Golpecito</div>
                        : <div>Restar</div>
            }
        </div>
    )
}

export default Attention