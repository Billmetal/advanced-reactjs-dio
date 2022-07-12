import React, { useRef, useEffect, useState } from "react";


function App() { 
  const inputRef = useRef();
  const count = useRef(1);
  const [, setValue] = useState(false);

  const handleClick = () => { 
    inputRef.current.focus();
    console.log("inputRef.current = ", inputRef.current);
    console.log("inputRef.value = ", inputRef.current.value);
    inputRef.current.value = "Alterando valor do Campo tbm ....";
  };

  useEffect(() => { 
    setTimeout(() => { 
      console.log("Passou no Timeout !!!")
      count.current = 300;
      setValue(true);
    },4000);
  },[]);

  return (
    <>
      <h1>Valor de count = {count.current}</h1>
      Foco: <input ref={inputRef} />
      <br />
      <br />
      <br/>
      <button onClick={handleClick}>Focar</button>
    </>
  );
}

export default App;