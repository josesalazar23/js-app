import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import "../src/styles/styles.css"




const App = () => {

  return (
    <div >
      <NavBar />

      <h2>nuevos productos</h2>
    </div>
  );
};
  
  

ReactDOM.render(<App />,document.getElementById('root'));


