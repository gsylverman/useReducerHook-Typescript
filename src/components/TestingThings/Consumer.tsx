import React, { useContext } from 'react';
import { AppContext } from '../TestingThings/AppStateProvider/AppStateProvider';
import { useSetStateHook } from '../TestingThings/AppStateProvider/AppStateProvider';

export default function Consumer() {
  const state = useContext(AppContext)
  const setNr = useSetStateHook();

  const changeNr = () => {
    setNr(prevState=>({nr: prevState.nr + 1}))
  }

  return (
    <>
      Nr: {state.nr}
      <button onClick={changeNr}>+</button>
    </>
  );
}