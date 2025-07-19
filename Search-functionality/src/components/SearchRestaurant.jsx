import {useState} from 'react';

const SearchRestaurant = ({ setSearchRestaurantItem }) => {

    const [inputVal, setInputVal] = useState("");


    function search() {
        setSearchRestaurantItem(inputVal);
    }

    return (
        <div>
            <input value={inputVal} onChange={(e) => setInputVal(e.target.value)}></input>
            <button onClick={search}>Search</button>
        </div>
    )
}


export default SearchRestaurant;