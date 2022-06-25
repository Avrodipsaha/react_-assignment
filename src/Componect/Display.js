import React, { useEffect, useState } from "react";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Display = () => {
  const [data, setData] = useState("");
  const [rndData, setRndData] = useState("A");
  const [keyval, setKeyval] = useState("");
  const [show, setShow] = useState("");
  const [score, setScore] = useState(Number.MAX_VALUE);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const Alphabet = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const handleChange = (event) => {
    setData(event.target.value);
    if (data.length === 20) {
      setRunning(false);
      setTime(0);
      if (time < score) {
        setScore(time);
        setShow("Success");
      } else {
        setShow("Failure");
      }
    }
  };

  const handelKeyDown = (e) => {
    setKeyval(e.key);
    let random = getRandomInt(1, 20);
    if (rndData.toString() === keyval.toString()) {
      setRndData(Alphabet[random]);
    }

    setRunning(true);
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
          <div className="content">{data.length > 20 ? show : rndData}</div>
        </div>
      </div>

      <div className="footer">
        <div className="timer">
          <b>Time:</b>
          <span>
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
            {("0" + ((time / 10) % 100)).slice(-3)}s
          </span>
        </div>
        <div className="hi_score">
          my best time:
          <span>
            {("0" + Math.floor((score / 1000) % 60)).slice(-2)}.
            {("0" + ((score / 10) % 100)).slice(-2)}s!
          </span>
        </div>
        <form>
          <label>
            <input
              type="text"
              placeholder="Type here"
              className="input"
              disabled={data.length <= 20 ? false : true}
              value={data}
              onKeyPress={handelKeyDown}
              onChange={handleChange}
            />
            <div
              className="reset"
              onClick={() => {
                setData("");
                setTime(0);
                setRunning(false);
              }}
            >
              Reset
            </div>
          </label>
        </form>
      </div>
    </>
  );
};

export default Display;
