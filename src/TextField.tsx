import React, { useState, useRef } from 'react';

export interface Props {
  text?: string,
  fnc: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>)=> void
}
 
const TextField: React.FC<Props> = ({fnc, handleChange}) => {
  const [state, setsState] = useState<number | null>(null);
  const nrRef = useRef<HTMLInputElement>(null);
  
  return ( 
  <>
  <button onClick={(e)=>{fnc(e); setsState(5); nrRef.current!.value="a";}}>Click</button>
  <input onChange={handleChange} type="text" ref={nrRef} />
  </>
  );
}
 
export default TextField;
