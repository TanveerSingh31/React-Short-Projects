import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Hook to access the path param

export const ProductDetail = () => {

    const [productData, setProductData] = useState(null);
    const { id } = useParams(); // Hook to access the path param

    useEffect(() => {
        fetchProductData();
    }, [id]);

    // Make API call, to fetch that particular product
    async function fetchProductData() {
        let data = await fetch(`https://api.freeapi.app/api/v1/public/randomproducts/${id}`);
        data = await data.json();
        setProductData(data?.data);
    }


    // Load the component with that product detail 
    return (
        productData == null ?
        <h1>Loading...</h1> : 
        <div>
            <h1> {productData.title} </h1>
            {productData.images.map(el => <img key={el.id} src={el}></img>)}
            <p> Price: {productData.price} </p>
            <p> Category: {productData.category} </p>
        </div> 
    );
}


export default ProductDetail;