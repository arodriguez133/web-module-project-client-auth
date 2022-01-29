import React, { useEffect } from 'react';
import axios from 'axios';


const FriendsList = () => {
    axios.get('http://localhost:9000')
    .then(res=>{console.log(res)})
    .catch(err => console.log('This is the error', err));

       
    
     
    return(
        <div>
            <p>Test</p>
        </div>
    )
}

export default FriendsList;