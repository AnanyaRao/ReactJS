import React, { useState } from 'react';
import Axios from 'axios';

export default function CreateUser() {
    const [name, updateName] = useState('');

    const handleChange = event => {
        updateName(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        if(name === '') return;
        const user = {name};
        Axios.post('https://jsonplaceholder.typicode.com/users', {user} ).then(response => {
            console.log(response);
        });
    }

    return(
        <div className="Create-User">
            <form onSubmit={handleSubmit}>
                <input type="text" name="user" placeholder="Name" value={name} onChange={handleChange} />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
}
