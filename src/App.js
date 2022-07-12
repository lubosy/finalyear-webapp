
import Topbar from './components/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import './app.css'
import Home from './components/Home/Home'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Report from './components/reports/Report';


function App() {
  return (
    
    <BrowserRouter>
      <header className="App-header">
      <Topbar/>
      <div className='container'>
      <Sidebar/> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/reports' element={<Report/>}/>
      </Routes>
      </div>
      </header>
      </BrowserRouter>
    
  );
}

export default App;
