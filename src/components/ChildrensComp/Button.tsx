import React, { memo } from 'react';

interface ButtonProps {
  nr: number;
  handleChange: () => void
}

const Button: React.FC<ButtonProps> = ({nr, handleChange}) => {
  console.log("Button - Number")
  return (
    <div>
      <div>{nr}</div>
      <button onClick={handleChange}>+</button>
    </div>
  );
}

export default memo(Button);