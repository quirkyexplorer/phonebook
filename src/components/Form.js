import React from "react";

function Form({
  newName,
  handleNameChange,
  phoneNumber,
  handlePhoneChange,
  addName
}) {
  return (
    <>
      {" "}
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <br></br>
        <div>
          number: <input value={phoneNumber} onChange={handlePhoneChange} />
        </div>
        <br></br>
        <div>
          <button type="submit">save</button>
        </div>
      </form>
    </>
  );
}

export default Form;
