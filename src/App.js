import './App.css';
import React, { useState } from "react";

//pracowaliśmy wspólnie na discordzie

 // var l1, znak;

//Wiktoria
const Screen = ({value}) => {
  if (value === "")
  {
    var valueScreen = 0;
  }
  else {
    valueScreen = value;
  }
    return (
      <div id='screen'>
      {valueScreen}
      </div>
    )
  }

const App = () => {
  const [result, setResult] = useState("");


//Weronika i Wiktoria
const numAndOper = (e) =>
{
  setResult(result.concat(e.target.name));
  
  
 
  //staraliśmy się wykonać w inny sposób
  /*switch (value) {
    case '+':
      l1 = document.getElementById("screen").innerHTML;
      znak = '+';
      document.getElementById("screen").innerHTML = "+";
      
      break;
      case '-':
        l1 = document.getElementById("screen").innerHTML;
      znak = '-';
      document.getElementById("screen").innerHTML = "+";

      break;
      case 'X':
        l1 = document.getElementById("screen").innerHTML;
      znak = '+';
      document.getElementById("screen").innerHTML = "+";

      break;
      case '/':
        l1 = document.getElementById("screen").innerHTML;
      znak = '+';
      document.getElementById("screen").innerHTML = "+";

      break;
      case 'U':
        l1 = document.getElementById("screen").innerHTML;
      znak = '+';
      document.getElementById("screen").innerHTML = "+";

      break;
      case '%':
        l1 = document.getElementById("screen").innerHTML;
      znak = '%';
      document.getElementById("screen").innerHTML = "%";

        break;
  
    default:
      var a = document.getElementById("screen").innerHTML;
      console.log(a);
      var pole = a + '' + value;
      document.getElementById("screen").innerHTML = Number(pole);
      break;
  }
console.log(l1);
console.log(znak);
  setResult(result + value);*/
}

//Remek
const clear = () => {
  setResult("");
}

//Remek
const back = () => {
  setResult(result.slice(0, result.length -1));
}

//Wiktoria
const calc = () => {
  setResult(eval(result).toString());
  if (Infinity)
  {
    setResult("Nie dziel przez 0");
  }
}

//Wspólnie
const percent = () => {
  setResult(result * 0.01)
}


return (
  <div className='calculator'>
    <Screen value={result}/>
   
    <div className='buttonsContainer'>
      <button id='C' onClick={clear}>C</button>
      <button id='back' onClick={back}>Cofnij</button>
      <button name="%" onClick={percent}>%</button>
      <button name="/" onClick={numAndOper}>/</button>
      <button name="7" onClick={numAndOper}>7</button>
      <button name="8" onClick={numAndOper}>8</button>
      <button name="9" onClick={numAndOper}>9</button>
      <button name="X" onClick={numAndOper}>X</button>
      <button name="4" onClick={numAndOper}>4</button>
      <button name="5" onClick={numAndOper}>5</button>
      <button name="6" onClick={numAndOper}>6</button>
      <button name="-" onClick={numAndOper}>-</button>
      <button name="1" onClick={numAndOper}>1</button>
      <button name="2" onClick={numAndOper}>2</button>
      <button name="3" onClick={numAndOper}>3</button>
      <button name="+" onClick={numAndOper}>+</button>
      <button name="." onClick={numAndOper}>.</button>
      <button name="0" onClick={numAndOper}>0</button>
      <button className='equals' onClick={calc}>=</button>
    </div>
  </div>
)}
export default App;
