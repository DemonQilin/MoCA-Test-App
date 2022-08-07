import React from 'react'

const WordCard = ({ word, index, setWords }) => {
    const handlerDeleteBtn = e => {
        setWords(words => {
            const newWords = JSON.parse(JSON.stringify(words));
            newWords.splice(index, 1);
            return newWords
        });
    };

    return (
        <li className='Memory_item'>
            <div className="Memory_item_div">{word.toUpperCase()}</div>
            <button className='Memory_item_btn' onClick={handlerDeleteBtn}><i className="fa-solid fa-x"></i></button>
        </li>
    )
}

export default WordCard