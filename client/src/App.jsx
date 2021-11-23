import React, { useEffect } from 'react';

import ChildComponent from './ChildComponent';

import './App.css';

const App = () => {
  useEffect(() => {
    fetch('http://localhost:9000/test')
      .then((res) => res.json())
      .then((res) => console.log('Res: ', res));
  }, []);

  return (
    <div className="App">
      <div className="title">City search</div>
      <ChildComponent text="Hello world" />
    </div>
  );
};

export default App;
