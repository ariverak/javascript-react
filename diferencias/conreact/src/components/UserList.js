import React from 'react'

export default function UserList(props){
    return (
        <div>
           {props.users.map((user,i)=>(
               <p key={i}>{user}</p>
           ))}
        </div>
    )
}