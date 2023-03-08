import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className='container'>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;

// className='full-body'