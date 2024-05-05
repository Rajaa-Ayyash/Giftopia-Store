import React, { useState } from 'react';
import "./CategoriesTable.css"
import Dropdown from "./dropdown/Dropdown.js";
import EditModal from "./editModal/EditModal.js";
import AddNewModal from "./addNewModal/AddNewModal.js";
import {  FaSearch,FaTrash,FaTimes } from 'react-icons/fa';
import { RiEdit2Line } from 'react-icons/ri';


export default function CategoriesTable(){
  const [rows, setRows]= useState([
    {
        categoryName: "Tech Gadgets",
    },
    {
        categoryName: "Beauty & Wellness",
    },
    {
        categoryName: "Travel Essentials",
    },
    {
        categoryName: "Games & Puzzles",
    },
    {
        categoryName: "For Kids",
    },
    {
        categoryName: "For Him",
    },
    {
        categoryName: "For Her",
    },
  ])
  const [selectedSearchBy,setSelectedSearchBy] = useState("Category Name")
  const [rowToEditCategoryName, setRowToEditCategoryName] = useState(0);
  const [search,setSearch]= useState('')

  const [openEditModal,setOpenEditModal] = useState(false)
  const [openAddNewModal, setOpenAddNewModal] = useState(false);


  function handleDeleteRow (categoryName){
    setRows(rows.filter(row  => row.categoryName !== categoryName));
  }

  function handleEditRow(name){
    setRowToEditCategoryName(name);
    setOpenEditModal(true);
  }

  function handleEditRowSubmit (newRow) {
    if(newRow.categoryName){
      if(rows.some(row => row.categoryName.toLowerCase() === newRow.categoryName.toLowerCase())){
        alert("There is already a category with this name.");
      }
      else{
        setRows(
          rows.map((currRow) => {
            if (currRow.categoryName !== rowToEditCategoryName) return currRow;
            return newRow;
          })
        );
      }
    }else{
      setRows([...rows, newRow])
    }
  };

  function handleSearchType(item){
    return search.toLowerCase() === '' ? item : item.categoryName.toLowerCase().includes(search);
  }

  function handleAddNewCategory() {
    setOpenAddNewModal(true);
  }

  function handleAddNewCategorySubmit(categoryName){
    if(categoryName !== " "){
      if(rows.some(row => row.categoryName.toLowerCase() === categoryName.toLowerCase())){
        alert("There is already a category with this name.");
      }
      else{
        setRows([...rows, { categoryName }]);
      }
    }else{
      alert("Add new category name.");
    }
  }

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
                <th className="columnHeader">EDIT</th>
                <th className="columnHeader">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {rows.filter((item)=>{
                return handleSearchType(item);
              }).map((row) => {
                return (
                  <tr key={row.categoryName}>
                    <td>{row.categoryName}</td>
                    <td>
                      <button className='edit-button' onClick={()=>(handleEditRow(row.categoryName))}><RiEdit2Line/></button>
                    </td>
                    <td>
                      <button className='delete-button' onClick={()=>handleDeleteRow(row.categoryName)}><FaTrash/></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
          {openAddNewModal && <AddNewModal closeAddNewModal={() => setOpenAddNewModal(false)} onSubmit={handleAddNewCategorySubmit} />}
          {openEditModal && <EditModal closeEditModal={()=>(setOpenEditModal(false))} defaultValue={setRowToEditCategoryName !== null && rows.find(row=> row.categoryName === rowToEditCategoryName )} onSubmit={handleEditRowSubmit} /> }
      </div>
    );
}