import React from 'react'

import './UsersList.css'
import Card from  '../../shared/components/UIElements/Card'
import UserItem from './UserItem'

const UsersList = (props) => {

    if (props.items.length === 0) {
        return (<div className="center">
            <Card>
            <h2> No users found </h2>
            </Card>
        </div>
        )
    } 
    // If lista no está vacia, map thru lista y return un user component for each user
     else {
         return  <ul className="users-list">
             {
                props.items.map(user => {
                    return <UserItem 
                    key={user.id} 
                    id={user.id} 
                    image={user.image}  
                    name={user.name}
                    placeCount={user.places}    
                    />
                })
             }
         </ul>
     }

}


export default UsersList