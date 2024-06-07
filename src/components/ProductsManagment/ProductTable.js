import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from "./dropdown/Dropdown.js";
import { FaSearch, FaTrash, FaTimes } from 'react-icons/fa';
import { RiEdit2Line } from 'react-icons/ri';
import { TfiPlus } from "react-icons/tfi";
import AddProduct from './editModal/AddNewProduct.js';

export default function ProductTable() {

  const [res, setRes] = useState([]);
  const [selectedSearchBy, setSelectedSearchBy] = useState("Search By...");
  const [open, setOpen] = useState(false);
  const [rowToEditProductId, setRowToEditProductId] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:6060/product/getAllProducts');
        setRes(response.data);
      } catch (error) {
        console.error('There was a problem fetching the data:', error);
      }
    }
    fetchData();
  }, []);

  function handleDeleteRow(targetId) {
    setRes(res.filter(item => item._id !== targetId));
  }

  function handleAddProduct() {
    setRowToEditProductId(null); 
    setOpen(true);
  }

  function handleEditRow(targetId) {
    setRowToEditProductId(targetId);
    setOpen(true);
  }

  function handleSearchType(item) {
    // كود البحث هنا
  }

  function handleSubmit(newProduct) {
    if (rowToEditProductId === null) {
      setRes([...res, newProduct]); 
    } else {
      setRes(res.map((currProduct) => {
        if (currProduct._id !== rowToEditProductId) return currProduct;
        return newProduct;
      }));
    }
    setOpen(false);
  }

  return (
    <>
      <div className="body">
        <div className="head">
          <div className="title">PRODUCT</div>
          <div className="search-field">
            <Dropdown selected={selectedSearchBy} setSelected={setSelectedSearchBy} />
            <div className="search-input">
              <input className="search-input-field" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
              {search ? <div className='clear-icon' onClick={() => setSearch('')}><FaTimes /></div> : ''}
            </div>
            <div className='search-icon'><FaSearch /></div>
          </div>
          <button type="button" className="adduser-button" onClick={handleAddProduct}><TfiPlus /></button>
        </div>
        <div className="table">
          <table className="ordersTable">
            <thead>
              <tr>
                <th className="columnHeader">PRODUCT ID</th>
                <th className="columnHeader">NAME</th>
                <th className="columnHeader">STOCK</th>
                <th className="columnHeader">PRICE</th>
                <th className="columnHeader">FINAL PRICE</th>
                <th className="columnHeader">MAIN IMAGE</th>
                <th className="columnHeader">EDIT</th>
                <th className="columnHeader">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {res.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.stock}</td>
                    <td>{item.price}</td>
                    <td>{item.finalPrice}</td>
                    <td>
  {item.mainImage && item.mainImage.secure_url ? (
    <img src={item.mainImage.secure_url} alt="product" style={{ width: '50px' }} />
  ) : (
    "No Image"
  )}
</td>                    <td>
                      <button className='edit-button' onClick={() => handleEditRow(item._id)}><RiEdit2Line /></button>
                    </td>
                    <td>
                      <button className='delete-button' onClick={() => handleDeleteRow(item._id)}><FaTrash /></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {open && <AddProduct closeEditModal={() => setOpen(false)} defaultValue={rowToEditProductId !== null ? res.find(item => item._id === rowToEditProductId) : {}} onSubmit={handleSubmit} />}
      </div>
    </>
  );
}
