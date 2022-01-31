import React, {useState} from 'react';
import axios from 'axios';



const AddFriend = (props) => {

    const [value, setValue] = useState({
        name: "",
        email: "",
        id: Date.now(),
    })



    
    const handleChange = (e) => {
        setValue({
            ...value, 
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        const {push} = props.history;
        e.preventDefault();
        const token = localStorage.getItem('token');
        axios.post('http://localhost:9000/api/friends', value, {headers: {authorization: token}})
        .then((res) => {
            console.log(res);
            push("/friends");
        })
        .catch((err) => {
            console.log(err);
        })
        setValue({
            ...value,
            name: "",
            email: "",
        })
    }

   
        
    


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <span>Friend Name</span>
                <input type="text"
                       name="name"
                       value={value.name}
                       onChange={handleChange}/>
                <span>Friend Email</span>
                <input type="text"
                       name="email"
                       value={value.email}
                       onChange={handleChange}/>
                <button>Enter</button>
            </form>
        </div>
    )
}

export default AddFriend;