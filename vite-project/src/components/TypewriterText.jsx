import React, {useState, useEffect} from "react";

function Typewriter(props)
{
    const [index, incIndex] = useState(0);
    


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
                
        }, 50);
        
        return () => {
            clearInterval(displayInterval)
        };
        
    }, [props.text]);



    return <span>{props.text.slice(0, index)}</span>


}

export default Typewriter;