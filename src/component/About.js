import React from 'react';



function Clicker() {
    function Handle(e) {
        alert('succes!')
        e.preventDefault()
    }

    return (
        <a href="#" onClick={Handle}>go to user page</a>
    )
}


const About = () => {
    return(
        <>
            <h3>my name is</h3>
            <Clicker/>
        </>
    )  
} 

export default About