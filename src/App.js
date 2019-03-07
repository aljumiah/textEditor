import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    currentTextColor: null,
    bold: false,
    italic: false,
    underline: false
  };

  changeColor = color => {
    // console.log(color);
    this.setState({ currentTextColor: color });
  };
  changeStyle = style => {
    let newStyle = !this.state[style];
    this.setState({ [style]: newStyle });
  };

  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleNames.map(style => {
      return (
        <button
          onClick={() => this.changeStyle(style)}
          style={styles[style]}
          key={style}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          onClick={() => this.changeColor(color)}
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>

        <textarea
          style={{
            color: this.state.currentTextColor,
            fontWeight: this.state.bold ? "bold" : "",
            fontStyle: this.state.italic ? "italic" : "",
            textDecorationLine: this.state.underline ? "underline" : ""
          }}
        />

        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
