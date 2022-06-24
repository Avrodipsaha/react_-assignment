import React from "react";

const Timer = () => {
  return (
    <>
      <div className="footer">
        <div className="timer">
          {" "}
          <b> Time: 0.000s </b>{" "}
        </div>
        <div className="hi_score">my best time:1.39s!</div>
        <form>
          <label>
            <input
              type="text"
              placeholder="Type here"
              autoFocus
              className="input"
            />
            <div className="reset">Reset</div>
          </label>
        </form>
      </div>
    </>
  );
};

export default Timer;
