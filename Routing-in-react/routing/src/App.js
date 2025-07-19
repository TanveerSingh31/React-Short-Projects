import './App.css';
import { Outlet } from 'react-router-dom';
import {Navbar} from './components/index';

function App() {
  return (
    <div>
      <Navbar />
      
      {/* This Outlet component will be replaced with Child components, based on route */}
      <Outlet /> 
      
    </div>
    
  );
}



export default App;
