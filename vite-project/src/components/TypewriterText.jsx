import React, {useState, useEffect, useRef} from "react";


function Typewriter(props)
{
    const [index, incIndex] = useState(0);
    const blipRef = useRef(null);

    //split the string up, match the word to its class if any, then display character by character
    function renderProgressiveText(text, maxIndex) {
        let charCount = 0;

        return text.split(" ").map((word, wordIndex) => {
            const cleanWord = word.replace(/[^\w]/g, "");
            const className = props.wordStyles[cleanWord] || "";
            
            let renderedWord = "";

            for (let i = 0; i < word.length; i++) {
            if (charCount < maxIndex) {
                renderedWord += word[i];
                charCount++;
            } else {
                break;
            }
            }

            if (charCount < maxIndex) {
            charCount++;
            }

            if (!renderedWord) return null;

            return (
            <span
                key={wordIndex}
                className={className}
            >
                {renderedWord}
                {" "}
            </span>
            );
        });
        }

    useEffect(()=>{
        blipRef.current = new Audio("../public/audio/blip.wav");
        blipRef.current.volume = 0.5;
    }, [])

    //start from index 0 and start displaying the characters
    useEffect(() =>
    {
        let i = 0;                 
        incIndex(0); 
        const displayInterval = setInterval(() => 
        {
            i++
            if (i > props.text.length)
            {
                        
                clearInterval(displayInterval);
                props.onComplete?.();
                return;
            }
                
            incIndex(i);
            const char = props.text[i - 1];
            //if the current character isn't a space or vowel play a blip
            if (char !== " " && char !== "." && char !== "a" && char !== "e" 
                && char !== "i" && char !== "o" && char !== "u") {
                blipRef.current.playbackRate = 0.9 + Math.random() * 0.2;
                blipRef.current.currentTime = 0;
                blipRef.current.play(); 
            }
 
        }, 50);
        
        return () => {
            clearInterval(displayInterval)
        };
        
    }, [props.text]);



    return <span>{renderProgressiveText(props.text, index)}</span>


}

export default Typewriter;