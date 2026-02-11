import React, {useState} from 'react';
import SpeechBubble from './SpeechBubble.jsx';
import Typewriter from './TypewriterText.jsx'


function DialogueController(){

    const introDialogue = ["Hi, I'm Tristan!", 
    "I got tired of sending my resume the boring way so I made this!", 
    "So what should we do?"];
        
    const choices = [
        {id: 1, text:"Let's see your resume."}, 
        {id: 2, text:"What have you made?"},
        {id: 3, text:"Tell me a story!"}];

    
    const story = [
        "Oh! Uh...", 
        "Gotta say I actually wasn't expecting that one...",
        "Well let's see...",
        "Once there was a charming graduate student with a lot of potential...",
        "Who was trying to start his career, and a really good looking recruiter decided to help hire him-",
        "After that, the recruiter's life was filled with a ton of wealth and good fortune!",
        "Good story huh?"];
    
    const story2 = ["That was probably my best story, heh."]

    const [curr_index, setIndex] = useState(0);
    const [complete, setComplete] = useState(false);
    const [choiceState, showChoices] = useState("dialogue");
    const [showRes, toggleRes] = useState(false);
    const [showGames, toggleGames] = useState(false);
    const [dialogue, setDialogue] = useState(introDialogue);
    const [storyFlag, toldStory] = useState(false);

    function onTypingComplete(){
        console.log("finished!");
        setComplete(true);

        // If this is the last line, switch to choices
    if (curr_index === dialogue.length - 1) {
      //showChoices("choices")
       ;}
    }

    function onBubbleClick(){
        console.log("Bubble click!");

        if (complete && curr_index === dialogue.length - 1){
            showChoices("choices");
        }
        if (!complete){
            return;
        }

        else if (curr_index < dialogue.length - 1){
            setIndex(prev => prev + 1);
            setComplete(false);
        }
    }

    //provide the desired effect for the choice selected
    function handleChoice(choice) {
        console.log("Selected:", choice.text);
        {if (choice.id === 1){
            toggleRes(true);
        }
        
        else if (choice.id === 2){
            toggleGames(true);
        }

        else if (choice.id === 3 && !storyFlag){
            setDialogue(story);
            setIndex(0);
            setComplete(false);
            showChoices("dialogue");
            //use the alternate text if the user tries to click again
            toldStory(true);
        }

        else if (choice.id === 3 && storyFlag){
            setDialogue(story2);
            setIndex(0);
            setComplete(false);
            showChoices("dialogue");
        }
    }
  }

    return(
        <div className="dialogue-container">
            {choiceState === "dialogue" && (
                <SpeechBubble onClick={onBubbleClick}>
                    <Typewriter
                        wordStyles={{Tristan: "highlight", recruiter: "highlight", Oh: "important"}}
                        text={dialogue[curr_index]}
                        onComplete={onTypingComplete}/>
                </SpeechBubble>
            )}

            {choiceState === "choices" && (<div className="choice-container">{
                choices.map(choice => (
                    <button
                        key={choice.id}
                        className="choice-bubble"
                        onClick={() => handleChoice(choice)}>
                            {choice.text}

                    </button>))}
                </div>)}

            {showRes && (
            <div className="pdf-overlay">
                <div className="pdf-window">
                    <button className="close-btn" onClick={() => toggleRes(false)}>
                        Close
                    </button>

                    <iframe
                        src="/resume.pdf"
                        title="Resume"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
            )}

            {showGames && (
            <div className="pdf-overlay">
                <div className="pdf-window">
                    <button className="close-btn" onClick={() => toggleGames(false)}>
                        Close
                    </button>

                    <iframe
                        src="https://trismakesgames.com/    "
                        title="Resume"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
            )}
        </div>

    )

    
}  
  
export default DialogueController;
