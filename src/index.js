import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class Screen extends React.Component {

  render(){
    return (
      <div id='screen'>0</div>
    )
  }
}

class CalculatorButton extends React.Component {

  render(){
    let buttonClass = 'bttn';
    if(this.props.bttnValue === "="){
      buttonClass += ' bttn-equal';
    }

    return (
        <button className={buttonClass}>{this.props.bttnValue}</button>
    )
  }
}

class Calculator extends React.Component {

  render(){
    const bttnValues = [
      "CE", "C", "%", "/",
      7, 8, 9, "X",
      4, 5, 6, "-",
      1, 2, 3, "+",
      "<", 0, ".", "="
    ];
    const buttonsMap = bttnValues.map((bttnValue) =>
      <CalculatorButton bttnValue = {bttnValue} />
    );

    return (
      <div className='calculator'>
        <Screen />
        <div className='buttonsContainer'>
          {buttonsMap}
        </div>
      </div>
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
