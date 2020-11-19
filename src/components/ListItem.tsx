import React, { useContext } from 'react';
import { Context } from '../App';

interface ItemType {
  id: string;
  text: string;
  completed: boolean;
}

const ListItem: React.FC<ItemType> = ({id, completed, text}) => {
  const dispatch = useContext(Context);
  return (
    <div className="pt-2">
      <span>
        {id}
      </span>
      <input
        onChange={()=>dispatch({type:"check", payload: id})}
        type="checkbox"
        checked={completed}
      />
      <input
        onChange={(e)=>dispatch({type: "write", payload: {e, id}})}
        type="text"
        value={text}
        />
      <button
        onClick={()=>dispatch({type: "delete", payload: id})}
        className="btn btn-danger"
      >
        Delete
      </button>
    </div>
  );
};

export default ListItem;