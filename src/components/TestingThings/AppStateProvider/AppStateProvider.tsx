import  React, { createContext, useState, useContext } from 'react';

interface AppContextI {
  nr: number;
}
const defaultState = {
  nr: 0
}

export const AppContext = createContext(defaultState);
export const AppSetStateContext = createContext<React.Dispatch<React.SetStateAction<AppContextI>> | undefined>(undefined);

export const useSetStateHook = () => {
  const useSetState = useContext(AppSetStateContext);
  if(!useSetState) {
    throw new Error('')
  }
  return useSetState;
}

const AppStateProvider: React.FC = ({children}) => {
  const [state, setState] = useState(defaultState);
  return (
    <AppContext.Provider value={state}>
      <AppSetStateContext.Provider value={setState}>
        {children}
      </AppSetStateContext.Provider>
    </AppContext.Provider>
  );
};

export default AppStateProvider;