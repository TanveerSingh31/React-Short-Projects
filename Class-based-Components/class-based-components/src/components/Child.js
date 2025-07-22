import React from 'react';
import InnerChild from './InnerChild';

class Child extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.name + " constructor called");
    }


    componentDidMount() {
        console.log(this.props.name + " child component did mount called")
    }


    render() {
        
        console.log(this.props.name + " render called");
        return(
            <div>
                <h1> child component </h1>
                <InnerChild />
            </div>
        );
    }
}

export default Child;