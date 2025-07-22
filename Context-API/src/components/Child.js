import { useContext } from 'react';
import UserContext from "../utils/UserContext";


const Child = () => {

    const {userInfo, setUserInfo} = useContext(UserContext);

    return (
        <div>
            <h1>Child Component</h1>
            <ul>
                <li>{userInfo.username}</li>
                <li>{userInfo.email}</li>
                <li>{userInfo.userId}</li>
            </ul>
            <input onChange={(e) => setUserInfo({...userInfo, username: e.target.value})}></input>
        </div>
    )
    
}

export default Child;