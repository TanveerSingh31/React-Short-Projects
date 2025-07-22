import Child from './Child';
import React from 'react';

// 1. Need to extend our component from React.Component
class User extends React.Component {

    // 1. Props get passed to constructor
    constructor(props) {

        super(props); // 2. Need to pass props to parent constructor
        console.log(this.props); // Only then we can access the props object here.
        
        console.log("Parent constructor called");
        // state obj
        // It will contain all state variables in one place
        this.state = {
            count1: 0, // initial values
            count2: 2
        }
    
    }



    componentDidMount() {
        console.log("Parent component did mount called");
    }



    render() {
        console.log("Parent render called ");
        // 2. Props can be accessed only via "this" keyword
        let {name, age} = this.props;

        // 3. State variable object can be accessed via "this" keyword
        let { count1, count2 } = this.state;

        return (
            <div>
                <h1>Name: {name}</h1>
                <h1>Age: {age}</h1>

                <Child name="First"/>
                <Child name="Second"/>

                <p>Count1 - {count1}</p>
                <p>Count2 - {count2}</p>

                <button onClick={() => {
                    // setState method is used to update the state 
                    this.setState({
                        count1: count1+1
                    })
                }}> Click </button>
            </div>
        );
    }
}

// Output
/*

Parent Constructor
Parent Render
    Child 1 constructor
    Child 1 Render
        Inner Child constructor
        Inner Child render

    Child2 constructor
    Child2 Render
        Inner Child constructor
        Inner Child render


    // ComponentDidMount are batched together !!! --> Optimization (to improve performance)
    - Inner Child componentDidMount
    - Child 1 componentDidMount
    - Inner Child componentDidMount
    - Child 2 componentDidMount

Parent componentDidMount

*/


export default User;