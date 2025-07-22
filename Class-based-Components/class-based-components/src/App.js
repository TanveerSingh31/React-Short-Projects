import './App.css';
import User from './components/User';
import ApiComponent from './components/ApiComponent';

function App() {
  return (
    <div className="App">
      <User name="Tanveer" age={23}/>
      <ApiComponent />      
    </div>
  );
}

export default App;
