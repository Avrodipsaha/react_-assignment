import React, { useEffect, useState } from "react";

// to get data
const getLocalItem = () => {
  let best = localStorage.getItem("bestTime");

  if (best) {
    return JSON.parse(localStorage.getItem("bestTime"));
  } else {
    return [];
  }
};

const Display = () => {
  const [data, setData] = useState("");
  // const [count, setCount] = useState(0);
  const [time, setTime] = useState(0.0);
  const [score, setScore] = useState(getLocalItem);

  if (time < score) {
    if (!score) {
      localStorage.setItem("bestTime", time);
    } else {
      localStorage.removeItem();
      localStorage.setItem("bestTime", time);
    }
  }

  //add data to localStorage
  useEffect(() => {
    localStorage.setItem("bestTime", JSON.stringify(score));
  }, [score]);

  console.log(score);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const Alphabet = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
  let random = getRandomInt(1, 20);
  let rndAlfa = Alphabet[random];

  // const detectKeyDown = (e) => {
  //   setData(e.key);
  // };
  // useEffect(() => {
  //   document.addEventListener("keydown", detectKeyDown, true);
  //   getRandomInt(1.2);
  // }, []);

  // const handleKeyPress = (event) => {
  //   event.preventDefalt();
  //   if (event.key === rndAlfa) {
  //     console.log("enter press here! ");
  //   }
  // };

  const handleChange = (event) => {
    setData(event.target.value);
    console.log(data);
  };
  return (
    <>
      <div className="header">
        <h1 className="heading">Type The Alphabet</h1>
        <p className="sub_heading">
          Typing game to see how fast you type. Timer starts when you do :)
        </p>
      </div>
      <div className="body">
        <div className="container">
          <div className="content">{rndAlfa}</div>
        </div>
      </div>
      <div className="footer">
        <div className="timer">
          <b> Time: {time.toFixed(3)}s </b>
        </div>
        <div className="hi_score">my best time:{score}s!</div>
        <form>
          <label>
            <input
              type="text"
              placeholder="Type here"
              autoFocus
              className="input"
              value={data}
              // onKeyPress={handleKeyPress}
              onChange={handleChange}
            />
            <div className="reset" onClick={() => setData("")}>
              Reset
            </div>
          </label>
        </form>
      </div>
    </>
  );
};

export default Display;
