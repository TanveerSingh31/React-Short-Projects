function List(props) {

    let { listItems } = props;

    console.log(listItems);

    return (
        <ul>
            {listItems.map((el, index) => {
                return <li key={index}>{el}</li>
            })}
        </ul>
    );
}

export default List;