import logo from './logo.svg';
import './App.css';
import Details from './Component/Details';
import AppRouter from './Component/AppRouter';
import Context from './Context';

function App() {
  return (
    <>
    <Context>
    <AppRouter/>
    </Context>
    
    </>
  );
}

export default App;
