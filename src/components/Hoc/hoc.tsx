import React from 'react';

const WraperComp = <T extends {}>(WrappedComp: React.ComponentType<T>, pass: string) => {
  return (props: T) => {
    if (pass === '1234') {
      return <WrappedComp {...props} />
    }
    return <div>Forbiden</div>
  }
}

export default WraperComp;