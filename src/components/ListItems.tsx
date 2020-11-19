import React from 'react';
import ListItem from './ListItem';

interface ItemType {
  id: string;
  text: string;
  completed: boolean;
}

export interface ListItemsProps {
  list: Array<ItemType>
}
 
const ListItems: React.FC<ListItemsProps> = ({list}) => {
  return ( 
    <>
      {list.length ? list.map(item=>(
        <ListItem
          key={item.id}
          {...item}
        />
      )) : null}
    </>
  );
};
 
export default ListItems;