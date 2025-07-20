import {Link} from 'react-router-dom';


export const Navbar = () => {
    return (
        <div className="App navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}


