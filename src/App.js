import React, { useEffect, useLayoutEffect } from 'react';

import './App.css';

const App = () => {
  useEffect(
    () => console.log(`Po wyrenderowaniu DOM`),
    []
  );

  useLayoutEffect(
    () => console.log(`Przed wyrenderowaniem DOM`),
    []
  );

  console.log(`render`);

  return (
    <div>
      <h1>Lorem ipsum dolor</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </div>
  )
}

export default App;
