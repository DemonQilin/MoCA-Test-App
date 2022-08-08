import { useState } from "react"

export const useSpeak = (wordsToSpeak, handlerAfterSpeak, handlerBeforeSpeak, delay = 2000) => {
    const [listening, setListening] = useState(false);

    const handlerStartSpeak = async e => {
        setListening(true);

        if (handlerBeforeSpeak) handlerBeforeSpeak();

        for (let i = 0; i < wordsToSpeak.length; i++) {
            const wordToSpeak = new SpeechSynthesisUtterance(wordsToSpeak[i]);
            speechSynthesis.speak(wordToSpeak);
            await new Promise(resolve => {
                setTimeout(resolve, delay, 'await')
            });
        };

        if (handlerAfterSpeak) handlerAfterSpeak();
        
        setListening(false);

    };

    return {
        listening,
        handlerStartSpeak
    }
}