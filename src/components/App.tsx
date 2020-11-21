import React, { useCallback, useState } from 'react';
import Button from './ChildrensComp/Button';
import Age from './ChildrensComp/Age';
import Title from './ChildrensComp/TitleComp';
 
const App: React.FC = () => {
  const [{nr}, setnumber] = useState<{nr: number}>({nr: 0});
  const [{age}, setAge] = useState<{age: number}>({age: 0});

  const handleChange = useCallback(() => {
    setnumber({nr: nr+1})
  }, [nr]);

  const handleChangeAge = useCallback(() => {
    setAge({age: age+1})
  }, [age]);

  return ( 
    <>
      <Title/>
      <Button nr={nr} handleChange={handleChange} />
      <Age age={age} handleChange={handleChangeAge} />
    </>
   );
}
 
export default App;