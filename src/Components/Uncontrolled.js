import React, { useRef, useState } from "react";

const Uncontrolled = () => {
  const lucky = useRef(null);
  const [show, setShow] = useState(false);
  const formy = (e) => {
    e.preventDefault();
    const name = lucky.current.value;
    name === "" ? alert("fill") : setShow(true);
  };

  return (
    <div>
      <h1>Hello</h1>
      <form action="" onSubmit={formy}>
        <label htmlFor="unform">
          <input type="text" id="unform" ref={lucky} />
        </label>
        <button>Submit</button>
      </form>
      <p>{show ? `My name is ${lucky.current.value} ` : ""}</p>
    </div>
  );
};

export default Uncontrolled;
