import React, { useEffect, useState} from 'react';
import axios from 'axios';


const FriendsList = () => {

    const [friends, setFriends] = useState([]);
    
    const getData = () => {
        const token = localStorage.getItem("token");
        axios.get("http://localhost:9000/api/friends", {headers: {authorization: token}})
        .then((res) => {
            console.log(res.data);
            setFriends(res.data);
        })
        .catch((err) => {console.log(err)});
    };
   

    useEffect(()=>{
        getData();
    },[]);

        console.log(friends);
    return(
        <div>
            {friends.map((friend)=>(
                <div>
                    <p>{friend.name}</p>
                </div>
            ))}
        </div>
    )
}

export default FriendsList;