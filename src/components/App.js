import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div id="main">
      <p className={active ? "redColor" : "blueColor"} >Newton School</p>
      <button id='button'  onClick={handleClick}>Change Style</button>
    </div>
  )
}


export default App;
