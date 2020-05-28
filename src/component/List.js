import React, { Component } from 'react'

function List(props) {
    return (
        <div>
            <ul>
                {
                    props.items.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        </div>
    )
}


class Api extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items : [],
            loaded : true
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(result => {
            this.setState({
                items : result,
                loaded : false
            })
        })
    }

    
    render() {
        const { items, loaded} = this.state;
        if(loaded) {
            return(
                <h3>loading...</h3>
            )
        }

        return(
            <div>
                <ul>
                    {
                        items.map((item, index) => <li key={index}>{item.name}</li>)
                    }
                </ul>
            </div>

        )
    }
}

export default Api


