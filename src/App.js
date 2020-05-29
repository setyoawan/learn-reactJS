import React, { Component } from 'react'
import { HashRouter, Route, NavLink } from 'react-router-dom'
import List from './component/List'


function Home() {
    return (
        <div>
            <h2>home</h2>
        </div>
    )
}


function Contact() {
    return (
        <div>
            <h2>contact</h2>
            <ul>
                <NavLink to="contacth/number">number</NavLink><br/>
                <NavLink to="contacth/map">map</NavLink>                
            </ul>
        </div>
    )
}

function Detail({ match }) {
    return(
    <h2>ini halaman {match.params.item}</h2>

    )
}

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>

                    <Route exact path="/" component={Home} />                    
                    <Route path="/about" component={List} />
                    <Route path="/contact" component={Contact} />
                    <Route exact path="/contacth/:item" component={Detail} />
                    
                </div>
            </HashRouter >
        );
    }
}

export default App
