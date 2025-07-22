import { useContext } from 'react';
import UserContext from "../utils/UserContext";


const Default = () => {

    const {userInfo} = useContext(UserContext);

    return (
        <div>
            <h1>Default Component</h1>
            <ul>
                <li>name: {userInfo.username}</li>
                <li>email: {userInfo.email}</li>
                <li>userId: {userInfo.userId}</li>
            </ul>
        </div>
    )
    
}

export default Default;