import React, { useState } from 'react';
import "./AdministratorsTable.css"
import Dropdown from "./dropdown/Dropdown.js";
import EditModal from "./editModal/EditModal.js";
import {  FaSearch,FaTrash ,FaExternalLinkAlt,FaTimes } from 'react-icons/fa';
import { TfiPlus } from "react-icons/tfi";
import { RiEdit2Line } from 'react-icons/ri';


export default function AdminTable (){
  const [rows, setRows]= useState([
    {
      adminID: "1",
      adminName: "Cody Fisher",
      adminEmail:"jane.smith@example.com",
      location: "Mystic Springs, Arcadia, Wonderland"

    },
    {
      adminID: "2",
      adminName: "Ali ismail",
      adminEmail:"test.user@example.com",
      location: "Whispering Pines, Arcadia, Wonderland"
    },
    {
      adminID: "3",
      adminName: "Ahmad Fisher",
      adminEmail:"random.person@example.com",
      location: "Celestial Harbor, Arcadia, Wonderland"
    },
    {
      adminID: "4",
      adminName: "Mohammed Ali",
      adminEmail:"fake.email@example.com",
      location: "Ember Peak, Arcadia, Wonderland"
    },
    {
      adminID: "5",
      adminName: "Cody Fisher",
      adminEmail:"sample.address@example.com",
      location: "Sapphire Valley, Arcadia, Wonderland"
    },
    {
      adminID: "6",
      adminName: "Cody Fisher",
      adminEmail:"placeholder.email@example.com",
      location: "Eternal Glade, Arcadia, Wonderland"
    },
    {
      adminID: "7",
      adminName: "Cody Fisher",
      adminEmail:"john.doe@example.com",
      location: "Mystic Springs, Arcadia, Wonderland"
    },
  ])
  const [selectedSearchBy,setSelectedSearchBy] = useState("Admin ID")
  const [open,setOpen] = useState(false)
  const [rowToEditadminID, setRowToEditadminID] = useState(0);
  const [search,setSearch]= useState('')



  function handleDeleteRow (targetIndex){
    setRows(rows.filter(row => row.adminID !== targetIndex));
  }

  function handleEditRow(targetIndex){
    setRowToEditadminID(targetIndex);
    setOpen(true);
  }

  function handlAddAdmin(targetIndex){
    setRowToEditadminID(targetIndex);
    setOpen(true);
  }

  function handleSubmit (newRow) {
    rowToEditadminID === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow) => {
            if (currRow.adminID !== rowToEditadminID) return currRow;
            return newRow;
          })
        );
  };

  function handleSearchType(item){
    switch(selectedSearchBy){
      
      case 'Admin ID':
        return search.toLowerCase() === '' ? item : item.adminID.toLowerCase().includes(search);;
        break;
      
      case 'Admin Name':
        return search.toLowerCase() === '' ? item : item.adminName.toLowerCase().includes(search);;
        break;
      case 'Admin Email':
        return search.toLowerCase() === '' ? item : item.adminEmail.toLowerCase().includes(search);;
        break;
      case 'Location':
        return search.toLowerCase() === '' ? item : item.location.toLowerCase().includes(search);;
        break;
      default:
        return search.toLowerCase() === '' ? item : item.adminID.toLowerCase().includes(search);;
    }
  }

    return (
      <div className="body">
        <div className="head">
            <div className="title">Administrators</div>
            <div className="search-field">
                <Dropdown selected={selectedSearchBy} setSelected={setSelectedSearchBy} />
                <div className="search-input">
                    <input className="search-input-field" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                    {search && <div className='clear-icon' onClick={() => setSearch('')}><FaTimes /></div>}
                </div>
                <div className='search-icon'><FaSearch /></div>
            </div>
            <button type="button" className="addAdmin-button" onClick={()=>handlAddAdmin()}><TfiPlus /></button>
        </div>
        <div className="table">
          <table className="ordersTable">
            <thead>
              <tr>
               
                <th className="columnHeader">ADMIN ID</th>
                <th className="columnHeader">ADMIN NAME</th>
                <th className="columnHeader">ADMIN EMAIL</th>
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
                  <tr key={row.adminID}>
                    <td>{row.adminID}</td>
                    <td>{row.adminName}</td>
                    <td>{row.adminEmail}</td>
                    <td>{row.location}</td>
                    
                    <td>
                      <button className='edit-button' onClick={()=>(handleEditRow(row.adminID))}><RiEdit2Line/></button>
                    </td>
                    <td>
                      <button className='delete-button' onClick={()=>handleDeleteRow(row.adminID)}><FaTrash/></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
          { open && <EditModal closeEditModal={()=>(setOpen(false))} defaultValue={rowToEditadminID !== null && rows.find(row => row.adminID === rowToEditadminID)} onSubmit={handleSubmit} /> }
      </div>
    );
}