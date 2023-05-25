import { Component } from "react";
import Speed from "../Speed/speed";
import getText from "../getText";
import Preview from "../Preview/preview";
 
import "./typingcard.css"

const initialState = {
  text: getText(),
  userInput: "",
  symbols: 0,
 sec: 0,
  started: false,
  finished: false,
countDown: 60,
};

class TypingCard extends Component {
  state = initialState;

  onRestart = () => {
    this.setState(initialState);
    clearInterval(this.interval);
  };

  onUserInputChange = (e) => {
    const value = e.target.value;
    this.setTimer();
    this.onFinished(value);
    this.setState({
      userInput: value,
      symbols: this.countCorrectSymbols(value),
    });
  };

  onFinished = (userInput) => {
    if (
      userInput === this.state.text ||
      userInput.length === this.state.text.length ||
      this.state.countDown === 0
    ) {
      clearInterval(this.interval);
      this.setState({ finished: true });
    }
  };

  countCorrectSymbols = (userInput) => {
    const text = this.state.text.replace(" ", "");
    return userInput
      .replace(" ", "")
      .split("")
      .filter((data, i) => data === text[i]).length;
  };

  setTimer = () => {
    if (!this.state.started) {
      this.setState({ started: true });
      this.interval = setInterval(() => {
        this.setState((prevProps) => {
     return { sec: prevProps.sec + 1, countDown: prevProps.countDown - 1 };
        
  
        });
      }, 1000);
    }
  };

  render() {
    if (this.state.countDown === 0) {
      clearInterval(this.interval);
    }
    return (
      <div className="card-container">
        
        <div className="inner">
        <div className="count-down"
            isStated={this.state.started}
            countDown={this.state.countDown}
          >
             
            <h2 className="timer">{this.state.countDown} <span >Sec's</span>  </h2>  
          </div>
         <div>
         <Preview text={this.state.text} userInput={this.state.userInput} />
          <textarea className="text-area"
            
            value={this.state.userInput}
            onChange={this.onUserInputChange}
            placeholder="Start typing....."
            readOnly={this.state.finished}/>
        </div>  
          

          <div>
            <Speed
              countDown={this.state.countDown}
              typingCardCallback={(speed) => this.props.homepageCallback(speed)}
              sec={this.state.sec}
              symbols={this.state.symbols}
              isFinished={this.state.finished}
            />

            <button type="submit" className="button" onClick={this.onRestart}> Restart </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TypingCard;

 
 
 
 