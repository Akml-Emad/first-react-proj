import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const name = 'Akml';

  return <ChildComponent userName={name} />;
}

export default ParentComponent;
