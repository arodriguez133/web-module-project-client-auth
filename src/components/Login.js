import React from 'react';


const Login = () => {
  
    return(
            <div>
                <form>
                    <p>UserName</p>
                    <input type="text"
                            name="username"></input>
                    <p>Password</p>
                    <input type="text"></input>
                    <button>Submit</button> 
                </form>
            </div>
    )
}

export default Login;