import React from 'react';
import '../styles/message.css'; 


function message({message}) {

    const {message1, message2, message3} = message

    return(
        <div className="message">
            <h2>Message</h2>
            <p>Message 1 :{message1}</p>
            <p>Message 2 :{message2}</p>
            <p>Message 3:{message3}</p>

            
        </div>
    );
}

export default message;