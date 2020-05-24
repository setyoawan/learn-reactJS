import React from 'react';


const About = (props) => {  
    return(
        <div>
            <p>Hai my name {props.name}, my age {props.age}</p>
            {props.children}
        </div>
    )  
}


export default About;