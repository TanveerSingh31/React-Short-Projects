function List(props) {

    let { listItems, removeElement } = props;

    function handleRemoval(id) {
        removeElement(id);
    }

    return (
        <ul>
            {listItems.map((el) => {
                return <li key={el.id} onClick={() => {handleRemoval(el.id)}}>{el.data}</li>
            })}
        </ul>
    );
}

export default List;