import React from 'react';
import Axios from 'axios';

export default class UserList extends React.Component {
    state = {users: []};

    render() {
        return(
            <div className="Get-Users">
                <table className="User-List-Table" border="1">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user => {
                            return <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

    async componentDidMount() {
        const userList = await Axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(userList.data);
        this.setState({users: userList.data})
    }
}
