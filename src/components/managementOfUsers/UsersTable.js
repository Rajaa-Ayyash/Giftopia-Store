import React, { useState } from 'react';
import "./UsersTable.css"
import Dropdown from "./dropdown/Dropdown.js";
import EditModal from "./editModal/EditModal.js";
import {  FaSearch,FaTrash ,FaTimes } from 'react-icons/fa';
import { TfiPlus } from "react-icons/tfi";
import { RiEdit2Line } from 'react-icons/ri';


export default function UsersTable (){
  const [rows, setRows]= useState([
    {
      userID: "1",
      userName: "Cody Fisher",
      userEmail:"jane.smith@example.com",
      password:'1234',
      location: "Mystic Springs, Arcadia, Wonderland"

    },
    {
      userID: "2",
      userName: "Ali ismail",
      userEmail:"test.user@example.com",
      password:'qw',
      location: "Whispering Pines, Arcadia, Wonderland"
    },
    {
      userID: "3",
      userName: "Ahmad Fisher",
      userEmail:"random.person@example.com",
      password:'098',
      location: "Celestial Harbor, Arcadia, Wonderland"
    },
    {
      userID: "4",
      userName: "Mohammed Ali",
      userEmail:"fake.email@example.com",
      password:'mohammed',
      location: "Ember Peak, Arcadia, Wonderland"
    },
    {
      userID: "5",
      userName: "Cody Fisher",
      userEmail:"sample.address@example.com",
      password:'09876',
      location: "Sapphire Valley, Arcadia, Wonderland"
    },
    {
      userID: "6",
      userName: "Cody Fisher",
      userEmail:"placeholder.email@example.com",
      password:'546',
      location: "Eternal Glade, Arcadia, Wonderland"
    },
    {
      userID: "7",
      userName: "Cody Fisher",
      userEmail:"john.doe@example.com",
      password:"3459",
      location: "Mystic Springs, Arcadia, Wonderland"
    },
  ])
  const [selectedSearchBy,setSelectedSearchBy] = useState("User ID")
  const [open,setOpen] = useState(false)
  const [rowToEdituserID, setRowToEdituserID] = useState(0);
  const [search,setSearch]= useState('')



  function handleDeleteRow (targetIndex){
    setRows(rows.filter(row => row.userID !== targetIndex));
  }

  function handleEditRow(targetIndex){
    setRowToEdituserID(targetIndex);
    setOpen(true);
  }

  function handlAdduser(targetIndex){
    setRowToEdituserID(targetIndex);
    setOpen(true);
  }

  function handleSubmit (newRow) {
    rowToEdituserID === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow) => {
            if (currRow.userID !== rowToEdituserID) return currRow;
            return newRow;
          })
        );
  };

  function handleSearchType(item){
    switch(selectedSearchBy){
      
      case 'user ID':
        return search.toLowerCase() === '' ? item : item.userID.toLowerCase().includes(search);;
        break;
      
      case 'user Name':
        return search.toLowerCase() === '' ? item : item.userName.toLowerCase().includes(search);;
        break;
      case 'user Email':
        return search.toLowerCase() === '' ? item : item.userEmail.toLowerCase().includes(search);;
        break;
      case 'Location':
        return search.toLowerCase() === '' ? item : item.location.toLowerCase().includes(search);;
        break;
      default:
        return search.toLowerCase() === '' ? item : item.userID.toLowerCase().includes(search);;
    }
  }

    return (
      <div className="body">
        <div className="head">
            <div className="title">Users</div>
            <div className="search-field">
                <Dropdown selected={selectedSearchBy} setSelected={setSelectedSearchBy} />
                <div className="search-input">
                    <input className="search-input-field" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                    {search && <div className='clear-icon' onClick={() => setSearch('')}><FaTimes /></div>}
                </div>
                <div className='search-icon'><FaSearch /></div>
            </div>
            <button type="button" className="adduser-button" onClick={()=>handlAdduser()}><TfiPlus /></button>
        </div>
        <div className="table">
          <table className="ordersTable">
            <thead>
              <tr>
               
                <th className="columnHeader">USER ID</th>
                <th className="columnHeader">USER NAME</th>
                <th className="columnHeader">USER EMAIL</th>
                <th className="columnHeader">PASSWORD</th>
                <th className="columnHeader">LOCATION</th>
                <th className="columnHeader">EDIT</th>
                <th className="columnHeader">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {rows.filter((item)=>{
                return handleSearchType(item);
              }).map((row) => {
                return (
                  <tr key={row.userID}>
                    <td>{row.userID}</td>
                    <td>{row.userName}</td>
                    <td>{row.userEmail}</td>
                    <td>{row.password}</td>
                    <td>{row.location}</td>
                    
                    <td>
                      <button className='edit-button' onClick={()=>(handleEditRow(row.userID))}><RiEdit2Line/></button>
                    </td>
                    <td>
                      <button className='delete-button' onClick={()=>handleDeleteRow(row.userID)}><FaTrash/></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
          { open && <EditModal closeEditModal={()=>(setOpen(false))} defaultValue={rowToEdituserID !== null && rows.find(row => row.userID === rowToEdituserID)} onSubmit={handleSubmit} /> }
      </div>
    );
}