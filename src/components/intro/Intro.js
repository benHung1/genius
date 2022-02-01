import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Developer", "Designer", "Content Creator"],
      backDelay: 1300,
      backSpeed: 60,
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ben Hung</h1>
          <h3>
            FreeLance<span ref={textRef}>Designer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
