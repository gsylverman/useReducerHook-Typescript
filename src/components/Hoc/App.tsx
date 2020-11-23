import React from 'react';
import WraperComp from './hoc';

const App = (props: {}) => { 
  return (
    <>
      You are in
    </>
  )
};

export default WraperComp(App, "1234");