import "./preview.css"

const Preview = (props) => {
  const text = props.text.split("");

  return (
    <div className="main-container" rows={10} cols={50} >
      {text.map((data, index) => {
        let color, bgColor;

        if (index < props.userInput.length) {
          bgColor =
            data === props.userInput[index] ? "transparent" : "hsl(0,100%,50%)";
          color = data === props.userInput[index] ? "hsl(158,100%,50%)" : null;
        }

        return (
          <span
            className="textSize"
            key={index}
            style={{ color: color, backgroundColor: bgColor }}
          >
            {data}
          </span>
        );
      })}
    </div>
  );
};

export default Preview;

 