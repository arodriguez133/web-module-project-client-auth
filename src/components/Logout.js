import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Logout = (props) => {

    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        id: "",
    })
    const {push} = props.history;

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.post('http://localhost:9000/api/logout', credentials, {headers: {authorization: token}})
        .then((res) => {
            console.log(res);
            localStorage.removeItem("token");
            push("/login");
        })
        .catch((err) => { 
            console.log("Logout Error", err);
        })
            
    }, []);

    return (<div></div>)
};

export default Logout;