import { useState } from 'react';

function SearchBar(props) {

    let { addData } = props;
    let [data, setData] = useState();

    function handleClick() {
        let id = Math.floor(Math.random() * 10);
        addData({data, id});
        setData("");
    }

    function handleChange(e) {
        let data2 = e.target.value;
        setData(data2);
    }
    
    return (
        <div>
            <input value={data} onChange={handleChange}></input>
            <button onClick={handleClick}> + </button>
        </div>
    );
}


export default SearchBar;