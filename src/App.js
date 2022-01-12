import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

function App() {
  return (
    <BrowserRouter>
    <div>
      <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar />

              <div className="container-fluid" id="container-wrapper">
               
                
              <Routes>
            
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              </Routes>
          
              </div>

            </div>

          </div>
       
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
