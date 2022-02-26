import Container from '@mui/material/Container';
import './App.css';
import PorfolioPage from './Pages/Portfolio';

function App() {
  return (
    <div className="App">
      <Container fixed sx={{ my: 2}}>
        <PorfolioPage/>
      </Container>
    </div>
  );
}

export default App;
