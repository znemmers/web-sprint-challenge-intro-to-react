import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SwNames from './components/Character'

const WrapperDiv = styled.div `
  text-align: center
  color: black
  margin: 0
  padding: 0
  font-size: 20px
`

const Sh1 = styled.h1 `
color: #443e3e;
text-shadow: 1px 1px 5px #fff;
`

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        console.log('hello', res.data)
        
        setData(res.data)
      })
      .catch(err => console.error(err))
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Sh1 className="Header">Characters</Sh1>
      { data && <SwNames star={data} key={data} />}
    </div>
    
  );
}

export default App;


