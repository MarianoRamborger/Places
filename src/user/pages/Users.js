import React from 'react';

import UsersList from '../components/UsersList'

const Users = () => {

    const USERS = [
        {
        id:  "u1", name: "Max", image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png', places: 3  
        },
        {
        id:  "u2", name: "Maxine", image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png', places: 5  
        }

]

return <UsersList items={USERS}  />

}

export default Users