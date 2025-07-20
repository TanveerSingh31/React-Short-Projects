import { Link } from 'react-router-dom';

const ProductCard = ({data}) => {

    let {id, title, price, category, thumbnail} = data;

    return (
        // This will redirect to -> /product/:id route
        // Component loaded on that route -> <ProductDetail />
        <Link to={`/product/${id}`}> 
            <div className="card">
                <img src={thumbnail}></img>
                <h1>{title}</h1>
                <p> ${price}</p>
                <p>{category}</p>
            </div>
        </Link>
        
    );


}

export default ProductCard;