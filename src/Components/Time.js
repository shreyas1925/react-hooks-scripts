import React from "react";

const Time = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, nextime] = useState(time);

  const Updatee = () => {
    time = new Date().toLocaleTimeString();
    nextime(time);
  };

  setInterval(Updatee, 1000);

  return (
    <>
      <h1>{ctime}</h1>
    </>
  );
};

export default Time;
