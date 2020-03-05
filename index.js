import React from 'react';
import CreateUser from './createUser';
import UserList from './userList';

export default class AxiosDemo extends React.Component {
    render() {
        return(
            <div>
                <h1>Axios Demo</h1>
                <h3>Add user</h3>
                <CreateUser />
                <br />
                <h3>Users</h3>
                <UserList />
                <hr />
            </div>
        );
    }
}
