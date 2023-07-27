import React from "react";

function Notification({ message }) {

    if( message == null) {
        return null; 
    }

    return  (
        <div className="newContact">
            {message}
        </div>
    )
}

export default Notification;