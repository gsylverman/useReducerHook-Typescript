import React, { useMemo, useState } from 'react';

export interface AppProps {
  
}
/*
  useMemo: invokes the provided function and caches its result
  useCallBack: caches function
  useMemo: caches the result of an invoked function
*/

const App: React.FC<AppProps> = () => {
  const [{ nr1 }, setNr1] = useState({nr1: 0});
  const [{ nr2 }, setNr2] = useState({nr2: 0});

  const isEven = useMemo(() => {
    let i = 0;
    while(i < 2000000000) i++;
    return nr1 % 2 === 0;
  }, [nr1])
  const handleChangeNr1 = () => {
    setNr1((prevState=>({nr1: prevState.nr1 + 1})))
  }

  const handleChangeNr2 = () => {
    setNr2((prevState=>({nr2: prevState.nr2 + 1})))
  }

  return ( 
    <div style={{margin: '0 auto', width: '500px', textAlign: 'center'}}>
      <div>
        Nr1: { nr1 } 
        {isEven ? " is Even" : ' is Odd'}
       </div>
      <button onClick={handleChangeNr1}>Nr1 - +</button>
      <div> Nr2: { nr2 } </div>
      <button onClick={handleChangeNr2}>Nr2 - +</button>
    </div>
   );
}
 
export default App;