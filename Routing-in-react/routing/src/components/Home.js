import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';


export const Home = () => {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);


    async function getProducts() {
        let data = await fetch("https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches");
        data = await data.json();
        setProductList(data?.data?.data);
    }

    return (
        <div>
            <h1>This is home page</h1>
            <div className='products-container'>
                {productList.map(el => <ProductCard key={el.id} data={el}/>)}
            </div>
            
        </div>   
    );
}