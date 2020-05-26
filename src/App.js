import React, { Component } from 'react';
import './style/index.css';
import Message from './component/Message';
import About from './component/About';


 function Bio(props) {
     return(
         <>
            <p>{props.name}</p>
            {props.children}                                            
        </>
     )
 }


 export default class App extends Component {
     
    constructor() {
        super()
        this.state= {
            message : ''
        }
    }

    BtnChange() {
        this.setState ({
           message : 'thanks'
        })
    }

     render() {
         return(
             <React.Fragment>
                 <h1>welcome</h1>
                 <Message/>
                 <About/>
                 <ul>
                    <li>
                        <Bio name='setyo awan prakoso'>
                            <p>{this.state.message}</p>
                            <button onClick={  () => {this.BtnChange()}}>Button</button>
                        </Bio>
                    </li>                    
                    <li>
                        <Bio name='setyo awan'>
                            <p>from indonesian</p>
                        </Bio>
                    </li>
                    <li>
                        <Bio name='setyo'>
                            <p>learn by doing!</p>
                        </Bio>
                    </li>
                </ul>
                 
             </React.Fragment>
         )
     }
 }