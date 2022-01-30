import React, {useState, useEffect} from 'react';
import axios from 'axios';




const Login = (props) => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    })

   
    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]:e.target.value,
        })
    }

    const login = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9000/api/login", credentials)
        .then((res) => {
            console.log("data", res);
            localStorage.setItem("token", res.data.token);
            props.history.push("/friends")
        })
        .catch((err) => {
            console.log(err);
        });
    };
  
    return(
            <div>
                <form onSubmit={login}>
                    <p>UserName</p>
                    <input type="text"
                            name="username"
                            onChange={handleChange}></input>
                    <p>Password</p>
                    <input type="password"
                           name="password"
                           onChange={handleChange}></input>
                    <button>Submit</button> 
                </form>
            </div>
    )
}

export default Login;