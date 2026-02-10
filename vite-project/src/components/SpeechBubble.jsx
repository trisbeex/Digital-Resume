function SpeechBubble({children, onClick}){
    const containerStyle = {
            width: '700px',
            height: '350px',
            padding: '0px 70px',
            backgroundColor: '#3498db', // Blue color
            borderRadius: '15px',      // The key property for rounded corners
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '66px',
            fontWeight: 'bold',
            position: 'relative'
    };

    const tail = {

        borderLeft: '40px solid transparent',
        borderRight: '40px solid transparent transparent',
        borderTop: '40px solid #3498db',
        position: 'absolute',
        left: '500px'
    }

    return (
        <div>
            <div onClick={onClick} style={containerStyle}>
                {children}           
            </div>
            <div style={tail}></div>
        </div>


        )
} 


export default SpeechBubble;