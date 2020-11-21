import React, { memo } from 'react';

interface ButtonProps {
  age: number;
  handleChange: () => void
}

const Button: React.FC<ButtonProps> = ({age, handleChange}) => {
  console.log("Button - Age")
  return (
    <div>
      <div>Age: {age}</div>
      <button onClick={handleChange}>+</button>
    </div>
  );
}

export default memo(Button);