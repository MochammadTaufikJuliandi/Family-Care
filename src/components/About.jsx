import React from "react";

function About(props) {
    return (
        <div id="about">
            <div className="about-image">
                <img src={props.image} alt=''/>
            </div>
            <div className="about-text">
                <h2> {props.title} </h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis laborum eius perspiciatis cumque neque 
                    corrupti vero perferendis cum, ex minus ab vel rem nemo quod nobis quis architecto quas laudantium.</p>
                <button> {props.button} </button>
            </div>
        </div>
    )
}


export default About;