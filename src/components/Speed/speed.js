import { useRef, useEffect } from "react";
 
import './speed.css'

const Speed = (props) => {
  const elementRef = useRef(0);
    console.log(props)
  useEffect(() => {
    if (props.countDown === 0 || props.isFinished) {
      elementRef.current.click();
    }
  });

  if (props.symbols !== 0 && props.sec !== 0) {
    const wpm = props.symbols / 5 / (props.sec / 60);

    return (
      <div isSpeed={wpm >= 50}>
        <h3
          ref={elementRef}
          onClick={() => props.typingCardCallback(Math.round(wpm))}
        >
          {Math.round(wpm)} wpm
        </h3>
      </div>
    );
  }

  return (
    <div className="speed">
      <h3 className="heading">0 wpm</h3>
    </div>
  );
};

export default Speed;

 