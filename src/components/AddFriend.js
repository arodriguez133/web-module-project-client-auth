import React, {useState} from 'react';




const AddFriend = () => {

    const [value, setValue] = useState({
        name: "",
        email: "",
    })

    
    const handleChange = (e) => {
        setValue({
            ...value, 
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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