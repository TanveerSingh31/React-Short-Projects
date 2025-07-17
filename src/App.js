import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.jsx';
import SearchBar from './Search.jsx';

function App() {

  const [data, setData] = useState([]);

  function addData(item) {
    setData([...data, item]);
  }

  return (
    <div className="App">
      <SearchBar addData={addData}/>
      <List listItems={data}/>
    </div>
  );
}

export default App;
