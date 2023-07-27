import React from "react";
const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }

function Footer() {
    return (
        <div style={footerStyle}>
          <br />
          <em>Phonebook app, created by Daniel Segura, 2023</em>
        </div>
      )
}

export default Footer;