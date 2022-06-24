import React, { useEffect, useState } from "react";
import Stopwatch from "./Stopwatch";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Display = () => {
  const [data, setData] = useState("");
  const [rndData, setRndData] = useState("");
  const [keyval, setKeyval] = useState("");

  const Alphabet = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";

  useEffect(() => {
    let random = getRandomInt(1, 20);
    setRndData(Alphabet[random]);

    if (rndData === keyval) {
      setRndData(Alphabet[random]);
    }
  }, [keyval]);

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handelKeyDown = (e) => {
    setKeyval(e.key);
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
          <div className="content">{rndData}</div>
        </div>
      </div>

      <div className="footer">
        <div className="timer">
          <b> Time: 0.000s </b>
        </div>
        <div className="hi_score">my best time:00.21s!</div>
        <form>
          <label>
            <input
              type="text"
              placeholder="Type here"
              className="input"
              value={data}
              onKeyDown={handelKeyDown}
              onChange={handleChange}
            />
            <div className="reset" onClick={() => setData("")}>
              Reset
            </div>
          </label>
        </form>
        <Stopwatch />
      </div>
    </>
  );
};

export default Display;
