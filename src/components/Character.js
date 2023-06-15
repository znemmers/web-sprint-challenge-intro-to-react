// Write your Character component here
import React from 'react'

const SwNames = (props) => {
    return (
        <div className = 'sw-name-wrapper'>
            <h3>{props.star.name}</h3>
            <p>{props.star.birth_year}</p>
            <p>{props.star.gender}</p>
        </div>
    )
}
export default SwNames;

