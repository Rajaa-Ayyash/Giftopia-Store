import React, { useState } from 'react';
import "./OrdersTable.css"
import Dropdown from "./dropdown/Dropdown.js";
import EditModal from "./editModal/EditModal.js";
import {  FaSearch,FaTrash ,FaExternalLinkAlt } from 'react-icons/fa';
import { TiArrowSortedUp , TiArrowSortedDown } from 'react-icons/ti';
import { RiEdit2Line } from 'react-icons/ri';


export default function OrdersTable (){
  const [rows, setRows]= useState([
    {
      orderID: "1",
      productNumber: "1",
      status: "Processing",
      price: "99$",
      customerName: "Cody Fisher",
      location: "Mystic Springs, Arcadia, Wonderland",
      orderDate: "14,6,2023",
      dateDelivered: "23,6,2023",
    },
    {
      orderID: "2",
      productNumber: "2",
      status: "Completed",
      price: "99$",
      customerName: "Cody Fisher",
      location: "Mystic Springs, Arcadia, Wonderland",
      orderDate: "14,6,2023",
      dateDelivered: "23,6,2023",
    },
    {
      orderID: "3",
      productNumber: "3",
      status: "Shipped",
      price: "99$",
      customerName: "Cody Fisher",
      location: "Mystic Springs, Arcadia, Wonderland",
      orderDate: "14,6,2023",
      dateDelivered: "23,6,2023",
    },
    {
      orderID: "4",
      productNumber: "4",
      status: "Refunded",
      price: "99$",
      customerName: "Cody Fisher",
      location: "Mystic Springs, Arcadia, Wonderland",
      orderDate: "14,6,2023",
      dateDelivered: "23,6,2023",
    },
    {
      orderID: "5",
      productNumber: "5",
      status: "Cancelled",
      price: "99$",
      customerName: "Cody Fisher",
      location: "Mystic Springs, Arcadia, Wonderland",
      orderDate: "14,6,2023",
      dateDelivered: "23,6,2023",
    },
    {
      orderID: "5",
      productNumber: "6",
      status: "Failed",
      price: "99$",
      customerName: "Cody Fisher",
      location: "Mystic Springs, Arcadia, Wonderland",
      orderDate: "14,6,2023",
      dateDelivered: "23,6,2023",
    },
  ])
  const [selectedSearchBy,setSelectedSearchBy] = useState("Search By")
  const [selectedSortBy,setSortSearchBy] = useState("Sort By")
  const [open,setOpen] = useState(false)
  const [rowToEdit, setRowToEdit] = useState(0);

  function handelStatusDesign (statusType){
      switch(statusType){
        case 'Processing':
          return 'processing-status-design';
          break;
        case 'Completed':
          return 'completed-status-design';
          break;
        case 'Shipped':
          return 'shipped-status-design';
          break;
        case 'Refunded':
          return 'refunded-status-design';
          break;
        case 'Cancelled':
          return 'cancelled-status-design';
          break;
        default:
          return 'failed-status-design';
      }
  }

  function handleDeleteRow (targetIndex){
    setRows(rows.filter((_, index) => index !== targetIndex));
  }

  function handleEditRow(index){
    setRowToEdit(index);
    setOpen(true);
  }

  function handleSubmit (newRow) {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

    return (
      <div className="body">
        <div className="head">
          <div className="title">Orders</div>
          <div className="search-sort">
            <div className="search">
              <Dropdown selected={selectedSearchBy} setSelected={setSelectedSearchBy} />
              <input className="inputSearch" placeholder="Search" />
              <div className="search-icon">
                <FaSearch />
              </div>
            </div>
            <div className="Sort" >
              <Dropdown selected={selectedSortBy} setSelected={setSortSearchBy} />
              <div className="acidic-icon">
                <TiArrowSortedUp />
              </div>
              <div className="deciding-icon">
                <TiArrowSortedDown />
              </div>
            </div>
          </div>
        </div>
        <div className="table">
          <table className="ordersTable">
            <thead>
              <tr>
                <th className="columnHeader">ORDER ID</th>
                <th className="columnHeader">PRODUCT NUMBER</th>
                <th className="columnHeader">STATUS</th>
                <th className="columnHeader">PRICE</th>
                <th className="columnHeader">CUSTOMER NAME</th>
                <th className="columnHeader">LOCATION</th>
                <th className="columnHeader">ORDER DATE</th>
                <th className="columnHeader">DATE DELIVERED</th>
                <th className="columnHeader">ITEM</th>
                <th className="columnHeader">EDIT</th>
                <th className="columnHeader">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => {
                return (
                  <tr key={index}>
                    <td>{row.orderID}</td>
                    <td>{row.productNumber}</td>
                    <td><div className={handelStatusDesign(row.status)}>{row.status}</div></td>
                    <td>{row.price}</td>
                    <td>{row.customerName}</td>
                    <td>{row.location}</td>
                    <td>{row.orderDate}</td>
                    <td>{row.dateDelivered}</td>
                    <td>
                      <button className='got-to-item-page-button'><FaExternalLinkAlt/></button>
                    </td>
                    <td>
                      <button className='edit-button' onClick={()=>(handleEditRow(index))}><RiEdit2Line/></button>
                    </td>
                    <td>
                      <button className='delete-button' onClick={()=>handleDeleteRow(index)}><FaTrash/></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
          { open && <EditModal closeEditModal={()=>(setOpen(false))} defaultValue={rowToEdit !== null && rows[rowToEdit]} onSubmit={handleSubmit} /> }
      </div>
    );
}