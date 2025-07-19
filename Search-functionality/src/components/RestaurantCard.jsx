
let style = {
    display: "inline-block",
    border: "1px solid black",
    backgroundColor: "white",
    padding: "2pt",
    margin: "50px"
}

const RestaurantCard = ({data}) => {


    let { images, title, price } = data;

    return (
        <div style={style}>
            <img src={images[0]} height='100px' width="100px"></img>
            <h1>{title}</h1>
            <p>${price}</p>
        </div>
    );

}

export default RestaurantCard;