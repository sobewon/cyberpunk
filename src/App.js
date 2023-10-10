import './App.css';
import React, { useState } from 'react';
import Main from './components/main/main'

function App() {
  
  const [page, setPage] = useState("splash");
  
  return (
    <div className="App">
      <Main page={page} setPage={setPage} />
    </div>
  );
}

export default App;
