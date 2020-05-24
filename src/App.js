import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './component/About';


// component dan props

// function Age(props) {
//   return (
//     <div>
//       <p>age {props.age}</p> 
//     </div>
//   );
// }

// function About(props) {
//   return(
//   <p>hai my name is {props.name}, <Age age= {props.age}/></p>
//   )
// }

class App extends Component{
  render() {
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Hello world</h3>              
        <About name="setyo" age="22">
          <p>child props</p>
        </About>
        <About name="awan" age="20">
          <button>store</button>
        </About>
        <About name="prakoso" age="21"/>  
      </header>
    </div>  
    );
  }
}

export default App;
