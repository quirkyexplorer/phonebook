import React from "react";

function Notification({ message, isError }) {

    console.log(message, isError);

    if( isError) {
        return  (
            <div className="error">
                {message}
            </div>
        )
    }

    return  (
        <div className="newContact">
            {message}
        </div>
    )
}

export default Notification;