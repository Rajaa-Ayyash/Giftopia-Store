import React, { useState, useEffect } from 'react';
import "./CategoriesTable.css"
import Dropdown from "./dropdown/Dropdown.js";
import AddNewModal from "./addNewModal/AddNewModal.js";
import {  FaSearch,FaTrash,FaTimes } from 'react-icons/fa';
import axios from 'axios';

export default function CategoriesTable(){
  const [rows, setRows]= useState([])
  const [selectedSearchBy,setSelectedSearchBy] = useState("Category Name")
  const [search,setSearch]= useState('')
  const [openAddNewModal, setOpenAddNewModal] = useState(false);

  const authToken = 'Giftopia__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2M2Q2ZTE0YzAxNTQxMzM5YjFhYWI5ZSIsImVtYWlsIjoiYWxhd25haC5tb29oYW1hZEBnbWFpbC5jb20iLCJpYXQiOjE3MTU0NTQ4MDV9.8uHVog7zHykMjW_5pzU_88Xx_hC_QPdAKmDROo45ZaA';

  async function handleDeleteRow (categoryName){
    try {
      await axios.delete('http://localhost:6060/category/deleteCategory', {
        headers: {
          Authorization: authToken
        },
        data:{
          name:categoryName
        }
      });
      getCategories();
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  function handleSearchType(row){
    return search.toLowerCase() === '' ? row : row.name.toLowerCase().includes(search); 
  }

  function handleAddNewCategory() {
    setOpenAddNewModal(true);
  }

  async function handleAddNewCategorySubmit(categoryName){
  
      if(categoryName){
        try {
          const response = await axios.post('http://localhost:6060/category/addNewCategory', {
            name: categoryName
          }, {
            headers: {
              Authorization: authToken
            }
          });
          if(response.data.message !== "category already exists"){
            getCategories();
          }
          else{
            alert("There is already a category with this name.");
          }
        } catch (error) {
          alert(error.response.data.message);
        }  
      }else{
        alert("Add new category name.");
      }
}

  useEffect(() => {
    getCategories();
  }, []);

  async function getCategories(){
    try {
      const response = await axios.get('http://localhost:6060/category/displayAllCategories', {
        headers: {
          Authorization: authToken
        }
      });
      setRows(response.data)
    } catch (error) {
      alert(error.response.data.message);
    }
  };


    return (
      <div className="body">
        <div className="head">
          <div className="title">Categories</div>
            <div className='addNewRow-field-and-search-field'>
              <div className="addNewRow-field">
                <button onClick={() => handleAddNewCategory()}>Add New</button>
              </div>
              <div className="search-field">
                <Dropdown selected={selectedSearchBy} setSelected={setSelectedSearchBy} />
                <div className="search-input">
                  <input className="search-input-field" placeholder="Search" value={search} onChange={(e) => (setSearch(e.target.value))} />
                  {search ? <div className='clear-icon' onClick={()=>(setSearch(''))}><FaTimes /></div> : ''}
                </div>
                  <div className='search-icon'><FaSearch /></div>
              </div>
            </div> 
        </div>
        <div className="table">
          <table className="ordersTable">
            <thead>
              <tr>
                <th className="columnHeader">Category Name</th>
                <th className="columnHeader">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {rows.filter((row)=>{
                return handleSearchType(row);
              }).map((row) => {
                return (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>
                      <button className='delete-button' onClick={()=>handleDeleteRow(row.name)}><FaTrash/></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
          {openAddNewModal && <AddNewModal closeAddNewModal={() => setOpenAddNewModal(false)} onSubmit={handleAddNewCategorySubmit} />}
      </div>
    );
}