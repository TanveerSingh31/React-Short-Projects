import React from 'react';

class InnerChild extends React.Component {

    constructor(props) {
        super(props);
        console.log("Inner child constructor called");
    }


    componentDidMount() {
        console.log("Inner child component did mount called")
    }


    render() {
        
        console.log("Inner child render called");
        return(
            <div>
                <h1> child component </h1>
            </div>
        );
    }
}

export default InnerChild;