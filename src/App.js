import React, { Component } from 'react'
import './style/App.css'
import List from './component/List'

export class App extends Component {


    constructor(props){
        super(props)
        this.state = {
            todoItem : '',
            item     : []
        }
    }

    
    HandleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            item : [...this.state.item, this.state.todoItem],
            todoItem: ''
        })      
          
    }
    
    HandleChange = (e) => {
        this.setState({
            todoItem : e.target.value
        })   
    }

    render() {
        return (
            <div className='card'>
                <h3>Todo List</h3> 

                <List items={this.state.item}/>

                <form onSubmit={this.HandleSubmit}>
                    <input value={this.state.todoItem} onChange={this.HandleChange}/>
                    <button>Add</button>
                </form>  
            </div>
        )
    }
}

export default App
