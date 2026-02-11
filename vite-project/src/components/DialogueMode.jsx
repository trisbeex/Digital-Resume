import React, {useState} from 'react';
import Typewriter from './TypewriterText';

function DialogueMode(){
    const [choiceState, showChoices] = useState(false);

    const prompt = ["So... What can I do for you?"];
    const choices = [
        {id: 1, text:"Let's see your resume."}, 
        {id: 2, text:"What have you made?"},
        {id: 3, text:"Tell me a story!"}];

    return (
        <div className="dialogue-container">
            {!choiceState && (
                <div className="speech-bubble">
                    <Typewriter text={prompt} onComplete={() => showChoices(true)}/>
                </div>)}

        

        
            {choiceState && (<div className="choice-container">{
                choices.map(choice => (
                <button
                    key={choice.id}
                    className="choice-bubble"
                    onClick={() => handleChoice(choice)}>

                </button>))}
                </div>)}

        </div>
    )

    function handleChoice(choice){
        console.log("handling choice: ", choice.text);
    }
}