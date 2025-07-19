import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List.jsx';
import SearchBar from './components/Search.jsx';
import RestaurantList from './components/RestaurantList.jsx';
import SearchRestaurant from './components/SearchRestaurant.jsx';



let styles = {
  padding: "10pt",
  margin: "10pt",
  backgroundColor: 'grey',

}



function App() {

  const [data, setData] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchRestaurantItem, setSearchRestaurantItem] = useState("");

  useEffect(() => {
    console.log("use effect in app.js called");
    let filteredRestaurantData = restaurantList.filter(el => el.title.toLowerCase().includes(searchRestaurantItem.toLowerCase()));
    setFilteredRestaurantList(filteredRestaurantData);    
  }, [searchRestaurantItem, restaurantList]);


  function addData(item) {
    setData([...data, item]);
  }

  function removeElement(id) {
    let newData = data.filter((el) => el.id != id);
    setData(newData);
  }

  


  return (
    <div className="App" style={styles}>
      <div className="navbar">
        <div>Home</div>
        <div>List</div>
        <div>Footer</div>
        <button className='btn' onClick={() => {setLoggedIn(!isLoggedIn)}}> {isLoggedIn ? "Logout" : "Login"} </button>
      </div>
      <SearchBar addData={addData}/>
      <List listItems={data} removeElement={removeElement}/>
      <SearchRestaurant setSearchRestaurantItem={setSearchRestaurantItem}/> 
      <RestaurantList restaurantData={filteredRestaurantList} setRestaurantList={setRestaurantList}/>
    </div>
  );
}

export default App;
