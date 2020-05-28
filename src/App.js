import React, { Component } from 'react';
import './style/index.css';
import Message from './component/Message';
import About from './component/About';
import List from './component/List';


 function Bio(props) {
     return(
         <>
            <p>{props.name}</p>
            {props.children}                                            
        </>
     )
 }

 class Event extends Component {

    constructor(props) {
        super(props)
        this.state = {
            eventHand : true
        }

        // deklarasi metode bind
        // this.changeEvent = this.changeEvent.bind(this)
    }

    changeEvent = () => {
        this.setState(state => ({
            eventHand : !state.eventHand
        }))
    }
    render() {
        return(
            <>
                <button onClick={this.changeEvent}>
                    {this.state.eventHand ? 'ON' : 'OFF'}                
                </button>

                <p>ready {this.state.eventHand ? 'ONFIRE' : 'DOWN'} </p>
            </>
        )
    }
 }

 export default class App extends Component {
     
    constructor() {
        super()
        this.state= {
            message : ''
        }
    }

    BtnChange = () => {
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
                            <button onClick={this.BtnChange}>Button</button>
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

                <Event/>

                <List/>
                
                 
             </React.Fragment>
         )
     }
 }