import React, {useState} from 'react';
import SpeechBubble from './SpeechBubble.jsx';
import Typewriter from './TypewriterText.jsx'


function DialogueController(){

    const dialogue = ["Hi, I'm Tristan!", 
    "I got tired of sending my resume the boring way so I made this!", 
    "So what should we do?"];
    const [curr_index, setIndex] = useState(0);
    const [complete, setComplete] = useState(false);

    function onTypingComplete(){
        console.log("finished!");
        setComplete(true);
    }

    function onBubbleClick(){
        console.log("Bubble click!");
        if (!complete){
            return;
        }

        else if (curr_index < dialogue.length - 1){
            setIndex(prev => prev + 1);
            setComplete(false);
        }
    }

    return(
        <SpeechBubble onClick={onBubbleClick}>
            <Typewriter
            text={dialogue[curr_index]}
            onComplete={onTypingComplete}/>
        </SpeechBubble>
    )
}  
  
export default DialogueController;
