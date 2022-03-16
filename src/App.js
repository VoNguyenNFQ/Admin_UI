import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  return (
    <div className='App flex'>
      <Sidebar />
      <div className='flex-1'>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;

