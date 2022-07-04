
import Topbar from './components/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import './app.css'
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Topbar/>
      <div className='container'>
      <Sidebar/>
      <Home/>
      </div>
      </header>
    </div>
  );
}

export default App;
