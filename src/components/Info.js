import React from "react";

function Info() {
  return (
    <div>
      <img src="/" />
      <div className="infocontainer">
        <h1 className="nametext">Suraj Pandey</h1>
        <h3>Software Developer</h3>
        <h3>Delhi, India</h3>
      </div>
      <div className="btncontainer">
        <button className="buttons">Email</button>
        <button className="buttons linkedin">LinkedIn</button>
      </div>
    </div>
  );
}

export default Info;
