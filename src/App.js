import './App.css';
import Catalogo from './components/Catalogo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
function App(){
  
  return (
    <div>
      <Container>
        <Catalogo />
      </Container>
    </div>
  );
}

export default App;
