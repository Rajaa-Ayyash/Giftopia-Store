import React, { useState } from 'react';
import "./OrdersTable.css"
import Dropdown from "./dropdown/Dropdown.js";
import EditModal from "./editModal/EditModal.js";
import {  FaSearch,FaTrash ,FaExternalLinkAlt,FaTimes } from 'react-icons/fa';
import { RiEdit2Line } from 'react-icons/ri';


export default function OrdersTable (){
  const [rows, setRows]= useState([
    {
      orderID: "1",
      productNumber: "1",
      productTitle:"Iphone",
      status: "Processing",
      price: "99$",
      customerName: "Cody Fisher",
      customerEmail:"jane.smith@example.com",
      location: "Mystic Springs, Arcadia, Wonderland",
      orderDate: "2,2,2018",
      dateDelivered: "2,3,2019",
    },
    {
      orderID: "2",
      productNumber: "2",
      productTitle:"Ps5",
      status: "Completed",
      price: "199$",
      customerName: "Ali ismail",
      customerEmail:"test.user@example.com",
      location: "Whispering Pines, Arcadia, Wonderland",
      orderDate: "10,8,2020",
      dateDelivered: "10,9,2020",
    },
    {
      orderID: "3",
      productNumber: "3",
      productTitle:"Flash",
      status: "Shipped",
      price: "19$",
      customerName: "Ahmad Fisher",
      customerEmail:"random.person@example.com",
      location: "Celestial Harbor, Arcadia, Wonderland",
      orderDate: "4,5,2020",
      dateDelivered: "30,5,2020",
    },
    {
      orderID: "4",
      productNumber: "4",
      productTitle:"Usp",
      status: "Refunded",
      price: "40$",
      customerName: "Mohammed Ali",
      customerEmail:"fake.email@example.com",
      location: "Ember Peak, Arcadia, Wonderland",
      orderDate: "14,6,2023",
      dateDelivered: "23,6,2023",
    },
    {
      orderID: "5",
      productNumber: "5",
      productTitle:"Laptop",
      status: "Cancelled",
      price: "2000$",
      customerName: "Cody Fisher",
      customerEmail:"sample.address@example.com",
      location: "Sapphire Valley, Arcadia, Wonderland",
      orderDate: "24,6,2021",
      dateDelivered: "7,7,2021",
    },
    {
      orderID: "5",
      productNumber: "6",
      productTitle:"Pc",
      status: "Failed",
      price: "123$",
      customerName: "Cody Fisher",
      customerEmail:"placeholder.email@example.com",
      location: "Eternal Glade, Arcadia, Wonderland",
      orderDate: "15,2,2022",
      dateDelivered: "23,3,2022",
    },
    {
      orderID: "7",
      productNumber: "7",
      productTitle:"Samsung",
      status: "Processing",
      price: "37$",
      customerName: "Cody Fisher",
      customerEmail:"john.doe@example.com",
      location: "Mystic Springs, Arcadia, Wonderland",
      orderDate: "10,4,2018",
      dateDelivered: "6,5,2018",
    },
  ])
  const [selectedSearchBy,setSelectedSearchBy] = useState("Order ID")
  const [open,setOpen] = useState(false)
  const [rowToEditProductNumber, setRowToEditProductNumber] = useState(0);
  const [search,setSearch]= useState('')

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
    setRows(rows.filter(row => row.productNumber !== targetIndex));
  }

  function handleEditRow(targetIndex){
    setRowToEditProductNumber(targetIndex);
    setOpen(true);
  }

  function handleSubmit (newRow) {
    rowToEditProductNumber === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow) => {
            if (currRow.productNumber !== rowToEditProductNumber) return currRow;
            return newRow;
          })
        );
  };

  function handleSearchType(item){
    switch(selectedSearchBy){
      case 'Order ID':
        return search.toLowerCase() === '' ? item : item.orderID.toLowerCase().includes(search);
        break;
      case 'Product Number':
        return search.toLowerCase() === '' ? item : item.productNumber.toLowerCase().includes(search);;
        break;
        case 'Product Title':
        return search.toLowerCase() === '' ? item : item.productTitle.toLowerCase().includes(search);;
        break;
      case 'Status':
        return search.toLowerCase() === '' ? item : item.status.toLowerCase().includes(search);;
        break;
      case 'Price':
        return search.toLowerCase() === '' ? item : item.price.toLowerCase().includes(search);;
        break;
      case 'Customer Name':
        return search.toLowerCase() === '' ? item : item.customerName.toLowerCase().includes(search);;
        break;
      case 'Customer Email':
        return search.toLowerCase() === '' ? item : item.customerEmail.toLowerCase().includes(search);;
        break;
      case 'Location':
        return search.toLowerCase() === '' ? item : item.location.toLowerCase().includes(search);;
        break;
      case 'Order Date':
        return search.toLowerCase() === '' ? item : item.orderDate.toLowerCase().includes(search);;
        break;
        case 'Date Delivered':
          return search.toLowerCase() === '' ? item : item.dateDelivered.toLowerCase().includes(search);;
          break;
      default:
        return search.toLowerCase() === '' ? item : item.orderID.toLowerCase().includes(search);;
    }
  }

    return (
      <div className="body">
        <div className="head">
          <div className="title">Orders</div>
            <div className="search-field">
              <Dropdown selected={selectedSearchBy} setSelected={setSelectedSearchBy} />
              <div className="search-input">
                <input className="search-input-field" placeholder="Search" value={search} onChange={(e) => (setSearch(e.target.value))} />
                {search ? <div className='clear-icon' onClick={()=>(setSearch(''))}><FaTimes /></div> : ''}
              </div>
                <div className='search-icon'><FaSearch /></div>
            </div>
        </div>
        <div className="table">
          <table className="ordersTable">
            <thead>
              <tr>
                <th className="columnHeader">ORDER ID</th>
                <th className="columnHeader">PRODUCT NUMBER</th>
                <th className="columnHeader">PRODUCT TITLE</th>
                <th className="columnHeader">STATUS</th>
                <th className="columnHeader">PRICE</th>
                <th className="columnHeader">CUSTOMER NAME</th>
                <th className="columnHeader">CUSTOMER EMAIL</th>
                <th className="columnHeader">LOCATION</th>
                <th className="columnHeader">ORDER DATE</th>
                <th className="columnHeader">DATE DELIVERED</th>
                <th className="columnHeader">ITEM</th>
                <th className="columnHeader">EDIT</th>
                <th className="columnHeader">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {rows.filter((item)=>{
                return handleSearchType(item);
              }).map((row) => {
                return (
                  <tr key={row.productNumber}>
                    <td>{row.orderID}</td>
                    <td>{row.productNumber}</td>
                    <td>{row.productTitle}</td>
                    <td><div className={handelStatusDesign(row.status)}>{row.status}</div></td>
                    <td>{row.price}</td>
                    <td>{row.customerName}</td>
                    <td>{row.customerEmail}</td>
                    <td>{row.location}</td>
                    <td>{row.orderDate}</td>
                    <td>{row.dateDelivered}</td>
                    <td>
                      <button className='got-to-item-page-button'><FaExternalLinkAlt/></button>
                    </td>
                    <td>
                      <button className='edit-button' onClick={()=>(handleEditRow(row.productNumber))}><RiEdit2Line/></button>
                    </td>
                    <td>
                      <button className='delete-button' onClick={()=>handleDeleteRow(row.productNumber)}><FaTrash/></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
          { open && <EditModal closeEditModal={()=>(setOpen(false))} defaultValue={rowToEditProductNumber !== null && rows.find(row => row.productNumber === rowToEditProductNumber)} onSubmit={handleSubmit} /> }
      </div>
    );
}