import * as React from 'react';
export interface TitleProps {
  
}
 
const Title: React.FC<TitleProps> = () => {
  console.log("Title component rendered")
  return ( 
    <div style={{background: 'lightblue'}}> Title</div>
   );
}
 
export default React.memo (Title);