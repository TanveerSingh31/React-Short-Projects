import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';



let style = {
    display: "flex",
    flexWrap: "wrap"
}


const RestaurantList = ({restaurantData, setRestaurantList}) => {

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        console.log("useEffect called !!!");
        fetchRestaurantList();
    }, []);

    const fetchRestaurantList = async() => {
        let data = await fetch('https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches');
        data = await data.json();

        let restaurantDataFromAPI = data.data.data;
        setTimeout(() => {
            setRestaurantList(restaurantDataFromAPI);
            setLoading(false);
        }, 3000);
    }

    

    return (
        loading ? 
        <Shimmer /> : 
        <div style={style}> 
            { restaurantData.map(el => <RestaurantCard key={el.id} data={el}/> ) }
        </div>
    );
}


export default RestaurantList;