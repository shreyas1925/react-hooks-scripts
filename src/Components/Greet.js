import React from "react";

const Greet = () => {
  let curdate = new Date();
  curdate = curdate.getHours();

  let greeting = "";

  const cssstyle = {};

  if (curdate > 1 && curdate < 23) {
    greeting = "Good Morning";
    cssstyle.color = "Green";
  } else if (curdate >= 12 && curdate < 7) {
    greeting = "Good Evening";
    cssstyle.color = "Orange";
  } else {
    greeting = "Good Night";
    cssstyle.color = "Red";
  }

  return (
    <>
      <div className="main">
        <div className="heading__div">
          <h1>
            Hello Sir, <span style={cssstyle}>{greeting}</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Greet;
