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
          name: <input placeholder="min 3 characters" value={newName} onChange={handleNameChange} />
        </div>
        <br></br>
        <div>
          number: <input placeholder="format:000-000-0000" value={phoneNumber} onChange={handlePhoneChange} />
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
