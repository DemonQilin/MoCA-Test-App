import { useState } from "react"

export const useSpeak = (wordsToSpeak, handlerAfterSpeak) => {
    const [listening, setListening] = useState(false);

    const handlerStartSpeak = async e => {
        setListening(true);

        for (let i = 0; i < wordsToSpeak.length; i++) {
            const wordToSpeak = new SpeechSynthesisUtterance(wordsToSpeak[i]);
            speechSynthesis.speak(wordToSpeak);
            await new Promise(resolve => {
                setTimeout(resolve, 2000, 'await')
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