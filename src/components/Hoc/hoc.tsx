import React from 'react';

type WraperCompType = {
  (props:any): JSX.Element;
}

const WraperComp = (WrappedComp: WraperCompType, pass: string) => {
  return (props: React.ReactChildren) => {
    if (pass === '1234') {
      return <WrappedComp {...props} />
    }
    return <div>Forbiden</div>
  }
}

export default WraperComp;