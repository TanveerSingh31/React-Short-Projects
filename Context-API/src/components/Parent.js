import { useContext } from 'react';
import UserContext from "../utils/UserContext";


const Parent = () => {

    const {userInfo} = useContext(UserContext);

    return (
        <div>
            <h1>Parent Component</h1>
            <ul>
                <li>{userInfo.username}</li>
                <li>{userInfo.email}</li>
                <li>{userInfo.userId}</li>
            </ul>
        </div>
    )
    
}

export default Parent;