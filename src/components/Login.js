import React from 'react';


const Login = () => {
    // const [values ,setValue, handleChange] = useForm();
    return(
            <div>
                <form>
                    <p>UserName</p>
                    <input type="text"></input>
                    <p>Password</p>
                    <input type="text"></input>
                    <button>Submit</button> 
                </form>
            </div>
    )
}

export default Login;