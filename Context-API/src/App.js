import { useState } from 'react';
import './App.css';
import UserContext from './utils/UserContext';
import Parent from './components/Parent';
import Child from './components/Child';
import Default from './components/Default';

function App() {

  const [userInfo, setUserInfo] = useState({
    username: "Tanveer",
    userId: 123,
    email: "tanveer.singh1@inc.com"
  });

  return (
    <div className="App">
      <UserContext.Provider value={{userInfo, setUserInfo}}>
        <Parent />
        <Child />
      </UserContext.Provider>
      
      {/* This will have default value , that were provided while creating the context */}
      <Default /> 
    </div>
  );
}

export default App;
