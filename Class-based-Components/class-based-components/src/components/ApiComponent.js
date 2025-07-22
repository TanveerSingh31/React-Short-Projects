import React from 'react';

class ApiComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: []
        };
    }

    //1. API is called inside componentDidMount method
    //2. After the state is updated, the component re-renders again with updated state
    async componentDidMount() {
        let data = await fetch("https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches");
        data = await data.json();

        this.setState({
           data: data?.data?.data,
           isLoading: false
        });
    }


    render() {

        let { data, isLoading } = this.state;

        return (
            isLoading ?
            <h1>Loading...</h1> :
            (
                <div style={{backgroundColor: "grey"}}>
                    {
                        data.map((el) => 
                            <div>
                                <h1>{el.title}</h1>
                                <img src={el.thumbnail}></img>
                                <p>$ {el.price}</p>
                                <p>{el.category}</p>
                            </div>
                    )}
                </div>
                
            )
        );
    }
}

export default ApiComponent;