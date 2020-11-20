import React, { createContext, useReducer } from 'react';
import ListItems from './components/ListItems';
import Counter from './components/Counter';

type Action = { type: "add"; }
| {type: 'check', payload: string}
| {type: 'delete', payload: string}
| {type: 'write', payload: {e: React.ChangeEvent<HTMLInputElement>; id: string}};

interface ItemType {
  id: string;
  text: string;
  completed: boolean;
}
type State = Array<ItemType>;

const listReducer = (state: State, action: Action) => {
  switch(action.type){
    case 'add':
      return [
        ...state,
        {
          id: Date.now().toString(),
          text: '',
          completed: false
        }
      ]
      case "check":
        return state.map(item => {
          if(item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed
            }
          }
          return item;
        })
        case 'write':
          return state.map(item=> {
            if(item.id === action.payload.id) {
              return {
                ...item,
                text: action.payload.e.target.value
              }
            }
            return item;
          })
          case 'delete' :
            return state.filter(item => item.id !== action.payload);
      default:
        return state;
  }
};
export const Context = createContext<any>(null);

export const App = () => {
  const [list, dispatch] = useReducer(listReducer, []);
  return (
    <Context.Provider value={dispatch}>
      <div className="container text-center">
        <h1>List</h1>
        <button
          onClick={()=>dispatch({type:"add"})}
          className='btn btn-primary'
        >
          Add
        </button><br/>
        <Counter>
          {({ nr, setNumber })=> (
            <>
              Nr: { nr }
              <button
                onClick={()=> setNumber(prevState => ({nr: prevState.nr + 1}))}
                className="btn btn-secondary"
              >
                +
              </button>
              <button
                onClick={()=>setNumber(prevState=>({nr: prevState.nr - 1}))}
                className="btn btn-danger"
              >
                -
              </button>
            </>
          )}
        </Counter>
        <ListItems list={list} />
      </div>
    </Context.Provider>
  );
};
