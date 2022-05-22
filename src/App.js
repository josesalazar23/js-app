import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import "../src/styles/styles.css"

function App() {
  
  return (
    <div>
      <NavBar/>

      <ItemListContainer nombre={jose}/>
    </div>
  )
    
  
}

export default App;
