import React, { useState } from 'react';
import "./ProductTableD.css";
import Dropdown from "./dropdown/Dropdown.js";
import EditModal from "./editModal/EditModal.js";
import { FaSearch, FaTrash, FaTimes } from 'react-icons/fa';
import { RiEdit2Line } from 'react-icons/ri';
import { TfiPlus } from "react-icons/tfi";


export default function ProductTable() {


  const [rows, setRows] = useState([
    {
      productID: "600",
      productNumber: "1",
      productDiscription: "Face creem",
      productTitle: "cerave",
      productPrice: "36$",
      productOccasion: "birthday",
      imgURL: "haja/dsjdns/bsmds:djsk",
      SourceURL: "dskjdk/alkdlaaplodpa//aldm"
    },
    {
      productID: "577",
      productNumber: "2",
      productDiscription: "smart phone",
      productTitle: "Iphone",
      productPrice: "15$",
      productOccasion: "birthday",
      imgURL: "haja/dsjdns/bsmds:djsk",
      SourceURL: "dskjdk/alkdlaaplodpa//aldm"
    },
    {
      productID: "67",
      productNumber: "3",
      productDiscription: "football",
      productTitle: "ball",
      productPrice: "7008$",
      productOccasion: "birthday",
      imgURL: "haja/dsjdns/bsmds:djsk",
      SourceURL: "dskjdk/alkdlaaplodpa//aldm"
    },
    {
      productID: "000",
      productNumber: "4",
      productDiscription: "skin care",
      productTitle: "cerave",
      productPrice: "300$",
      productOccasion: "mothers day",
      imgURL: "haja/dsjdns/bsmds:djsk",
      SourceURL: "dskjdk/alkdlaaplodpa//aldm",
    },
    {
      productID: "15",
      productNumber: "5",
      productDiscription: "dress",
      productTitle: "dressss",
      productPrice: "4$",
      productOccasion: "mothers day",
      imgURL: "haja/dsjdns/bsmds:djsk",
      SourceURL: "dskjdk/alkdlaaplodpa//aldm"
    },
    {
      productID: "6789",
      productNumber: "6",
      productDiscription: "hi",
      productTitle: "jk",
      productPrice: "7$",
      productOccasion: "birthday",
      imgURL: "haja/dsjdns/bsmds:djsk",
      SourceURL: "dskjdk/alkdlaaplodpa//aldm"
    },
    {
      productID: "7842",
      productNumber: "7",
      productDiscription: "jhaj",
      productTitle: "HM",
      productPrice: "60$",
      productOccasion: "wedding",
      imgURL: "haja/dsjdns/bsmds:djsk",
      SourceURL: "dskjdk/alkdlaaplodpa//aldm"
    },
  ])
  
  const [selectedSearchBy, setSelectedSearchBy] = useState("Search By...")
  const [open, setOpen] = useState(false)
  const [rowToEditProductNumber, setRowToEditProductNumber] = useState(0);
  const [search, setSearch] = useState('');

  function handleDeleteRow(targetIndex) {
    setRows(rows.filter(row => row.productNumber !== targetIndex));
  }

  function handlAdduser(targetIndex){
    setRowToEditProductNumber(targetIndex);
    setOpen(true);
  }

  function handleEditRow(targetIndex) {
    setRowToEditProductNumber(targetIndex);
    setOpen(true);
  }

  function handleSubmit(newRow) {
    rowToEditProductNumber === null
      ? setRows([...rows, newRow])
      : setRows(
        rows.map((currRow) => {
          if (currRow.productNumber !== rowToEditProductNumber) return currRow;
          return newRow;
        })
      );
  };

  function handleSearchType(item) {

    switch (selectedSearchBy.toLowerCase()) {

      case 'product id':
        return search.toLowerCase() === '' ? item : item.productID.toLowerCase().includes(search);
      case 'product number':
        return search.toLowerCase() === '' ? item : item.productNumber.toLowerCase().includes(search);
      case 'product description':
        return search.toLowerCase() === '' ? item : item.productDiscription.toLowerCase().includes(search);
      case 'product title':
        return search.toLowerCase() === '' ? item : item.productTitle.toLowerCase().includes(search);
      case 'product price':
        return search.toLowerCase() === '' ? item : item.productPrice.toLowerCase().includes(search);
      case 'product occasion':
        return search.toLowerCase() === '' ? item : item.productOccasion.toLowerCase().includes(search);
      case 'product imageurl':
        return search.toLowerCase() === '' ? item : item.imgURL.toLowerCase().includes(search);
      case 'product sourceurl':
        return search.toLowerCase() === '' ? item : item.SourceURL.toLowerCase().includes(search);
      default:
        return search.toLowerCase() === '' ? item : item.productID.toLowerCase().includes(search);
    }
  };



  return (

    <>
        <div className="body">
          <div className="head">
            <div className="title">PRODUCT</div>
            <div className="search-field">
              <Dropdown selected={selectedSearchBy} setSelected={setSelectedSearchBy} />
              <div className="search-input">
                <input className="search-input-field" placeholder="Search" value={search} onChange={(e) => (setSearch(e.target.value))} />
                {search ? <div className='clear-icon' onClick={() => (setSearch(''))}><FaTimes /></div> : ''}
              </div>
              <div className='search-icon'><FaSearch /></div>
            </div>
            <button type="button" className="adduser-button" onClick={()=>handlAdduser()}><TfiPlus /></button>
          </div>
          <div className="table">
            <table className="ordersTable">
              <thead>
                <tr>
                  <th className="columnHeader">PRODUCT ID</th>
                  <th className="columnHeader">PRODUCT NUMBER</th>
                  <th className="columnHeader">PRODUCT DESCRIPTION</th>
                  <th className="columnHeader">PRODUCT TITLE</th>
                  <th className="columnHeader">PRODUCT PRICE</th>
                  <th className="columnHeader">PRODUCT OCCASION</th>
                  <th className="columnHeader">PRODUCT IMAGEURL</th>
                  <th className="columnHeader">PRODUCT SOURCEURL</th>
                  <th className="columnHeader">EDIT</th>
                  <th className="columnHeader">DELETE</th>
                </tr>
              </thead>
              <tbody>
                {rows.filter((item) => {
                  return handleSearchType(item);
                }).map((row) => {
                  return (
                    <tr key={row.productNumber}>
                      <td>{row.productID}</td>
                      <td>{row.productNumber}</td>
                      <td>{row.productDiscription}</td>
                      <td>{row.productTitle}</td>
                      <td>{row.productPrice}</td>
                      <td>{row.productOccasion}</td>
                      <td>{row.imgURL}</td>
                      <td>{row.SourceURL}</td>
                      <td>
                        <button className='edit-button' onClick={() => (handleEditRow(row.productNumber))}><RiEdit2Line /></button>
                      </td>
                      <td>
                        <button className='delete-button' onClick={() => handleDeleteRow(row.productNumber)}><FaTrash /></button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {open && <EditModal closeEditModal={() => (setOpen(false))} defaultValue={rowToEditProductNumber !== null && rows.find(row => row.productNumber === rowToEditProductNumber)} onSubmit={handleSubmit} />}
        </div>
    </>
  );
}