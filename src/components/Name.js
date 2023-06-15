import React from "react";

export default function Name(props){
    return (
        <div className='name-swnames-container'>
            <h3>Name: {props.star.name}</h3>
            <p>Birth Year: {props.star.birth_year}</p>
            <p>Gender: {props.star.gender}</p>
        </div>
    )
}