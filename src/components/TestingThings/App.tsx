import React from 'react';
import AppStateProvider from './AppStateProvider/AppStateProvider';
import Consumer from './Consumer';

export default function App(){

  return (
    <AppStateProvider>
      <h1>Hy</h1>
      <Consumer />
    </AppStateProvider>
  );
}