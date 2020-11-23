import React, { useEffect, useState } from 'react';

export default function App () {
  const [x, setX] = useState<number>(0)
  const [y, setY] = useState<number>(0)

  const readMouseValues = (e: MouseEvent) => {
   setX(e.clientX);
   setY(e.clientY);
  }
  useEffect(()=> {
    console.log('component did mount');
    window.addEventListener('mousemove',  readMouseValues);
    return () => {
      console.log("component did unmount")
      window.removeEventListener("mousemove", readMouseValues);
    }
  },[])
  return (
    <>
    <div>
      Client X : {x}
    </div>
    <div>
      Client Y : {y}
    </div>
    </>
  );
}