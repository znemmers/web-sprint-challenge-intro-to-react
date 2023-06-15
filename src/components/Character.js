// Write your Character component here
import React from 'react'
import Name from './Name'



export default function SwNames(props){
    const {star} = props;
    return (
        star.map(sw => {
            return <Name star={sw} />
        })
    )
}