import React from "react";
import "./UserListRow.css";
export default function UserListRow(props) 
{
    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.email}</td>
                <td>{props.location}</td>
                <td className={`${props.user == 'Admin' ? 'd-none':'' }`} >{ props.user == 'User' ? props.value : props.timeWork}</td>
                <td >
                    <p className={`${props.activeOrNo == 'active' ? 'active-user-btn' : 'not-active-user-btn'} activ-or-not-user-btn`} >
                        active
                    </p>
                </td>
                <td>{props.gender}</td>
                <td>
                    <button className='edit-user-btn'>edit</button>
                </td>
                <td>
                    <button className='delete-user-btn'>delete</button>
                </td>

            </tr>
        </>

    )
}