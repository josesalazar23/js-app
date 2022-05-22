import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar/NavBar';
import "../src/styles/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


const App = () => {

  return (
    <div>
      <div >
        <NavBar />
      </div>

      <div className=''>
        <ItemListContainer nombre={"jose salazar"}/>
      </div>
    </div>
  );
};


ReactDOM.render(<App />,document.getElementById('root'));


