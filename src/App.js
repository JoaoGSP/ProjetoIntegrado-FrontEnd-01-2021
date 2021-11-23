import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Rotas from './Rotas';
import { BrowserRouter } from 'react-router-dom';
import Menu from './elements/Menu';

function App() {
  return (
    <>
    
      <BrowserRouter>
      <Menu/>
      <Rotas/>
      </BrowserRouter>
    
    </>
  );
}

export default App;
