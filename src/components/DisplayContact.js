import React from "react";

function DisplayContact({ person, handleDelete }) {
  return (
    <div className="person"> 
        <h3> {` ${person.name} `}     
        </h3>  
        <p> {` ${person.number} `}    
        </p>
        <button onClick={() => handleDelete(person)}>delete</button>
    </div>
  );
}

export default DisplayContact;
