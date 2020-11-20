import React, { useState } from 'react';

interface CounterProps {
  children: (data: {
    nr: number,
    setNumber: React.Dispatch<React.SetStateAction<{
      nr: number;
  }>>
  }) => JSX.Element | null
}

const Counter: React.FC<CounterProps> = ({children}) => {
  const [{nr}, setNumber] = useState({nr: 0});

  return (
    <div>
      {children({nr, setNumber})}
    </div>
  )
};

export default Counter;
