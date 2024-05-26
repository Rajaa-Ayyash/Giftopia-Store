import React, { useState } from 'react';
//{ --- , useEffect }
import "./ProductTableD.css";
import Dropdown from "./dropdown/Dropdown.js";
import EditModal from "./editModal/EditModal.js";
import { FaSearch, FaTrash, FaTimes } from 'react-icons/fa';
import { RiEdit2Line } from 'react-icons/ri';
import { TfiPlus } from "react-icons/tfi";
//import axios from 'axios';
//import Cookie from 'cookie-universal';

export default function ProductTable() {


  const [rows, setRows] = useState([
    {
      productID: "15",
      productNumber: '1' ,
      productName: "cerave",
      productDiscription: "Face creem",
      inStock: "10000",
      price: "15$",
      discount: "3%",
      finalPrice: "11$",
      size: "88ml",
      colors: "one color",
      imgURL: "vhjgd/jwof:nkwflw/wojo"
    },
    {
      productID: "36",
      productNumber: "2",
      productName: "iPhon 15",
      productDiscription: "Smart phone",
      inStock: "108",
      price: "800$",
      discount: "5%",
      finalPrice: "750$",
      size: "O/S",
      colors: "Black, White, Selver",
      imgURL: "vhjgd/jwof:nkwflw/wojoo"
    },
    {
      productID: "20",
      productNumber: "3",
      productName: "t-shirt",
      productDiscription: "women red t-shirt",
      inStock: "50",
      price: "15$",
      discount: "3%",
      finalPrice: "7$",
      size: "s, m, l, xl",
      colors: "Red",
      imgURL: "vhjgd/jwof:nkwflw/wojo"
    },
    {
      productID: "25",
      productNumber: "4",
      productName: "cerave",
      productDiscription: "Face creem",
      inStock: "198",
      price: "15$",
      discount: "3%",
      finalPrice: "5$",
      size: "88ml",
      colors: "one color",
      imgURL: "vhjgd/jwof:nkwflw/wojo"
    },
    {
      productID: "132",
      productNumber: "5",
      productName: "cerave",
      productDiscription: "Face creem",
      inStock: "19",
      price: "15$",
      discount: "3%",
      finalPrice: "11$",
      size: "88ml",
      colors: "one color",
      imgURL: "vhjgd/jwof:nkwflw/wojo"
    },
    {
      productID: "132",
      productNumber: "6",
      productName: "shorts",
      productDiscription: "men shorts",
      inStock: "60",
      price: "15$",
      discount: "4%",
      finalPrice: "10$",
      size: "88ml",
      colors: "s, xl",
      imgURL: "vhjgd/jwof:nkwflw/wojo"
    },
    {
      productID: "132",
      productNumber: "7",
      productName: "cerave",
      productDiscription: "Face creem",
      inStock: "198",
      price: "15$",
      discount: "3%",
      finalPrice: "11$",
      size: "88ml",
      colors: "one color",
      imgURL: "vhjgd/jwof:nkwflw/wojo"
    },
  ])

  const [selectedSearchBy, setSelectedSearchBy] = useState("Search By...")
  const [open, setOpen] = useState(false)
  const [rowToEditProductNumber, setRowToEditProductNumber] = useState(0);
  const [search, setSearch] = useState('');
  //const cookie = Cookie();
  //const authToken = cookie.get('GiftopiaToken');



  function handleDeleteRow(targetIndex) {
    setRows(rows.filter(row => row.productNumber !== targetIndex));
  }

  function handlAdduser(targetIndex) {
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

  
// ----------- Code for trying to connect with the product backend -----------
 /* useEffect(() => {
    getProduct();
  }, []);


  async function getProduct() {
    try {
      const response = await axios.get('http://localhost:3001/product', {
        headers: {
          Authorization: `giftopia ${authToken}`
        }
      });
      setRows(response.data.products);
    } catch (error) {
      alert(error.response?.data?.message || "Error fetching products");
    }
  }*/

// ----------- Code for trying to connect with the product backend -----------

  /*async function handleSubmit(newRow) {
    try {
      if (rowToEditProductNumber === null) {
        const response = await axios.post('http://localhost:3001/product/addNewProduct', newRow, {
          headers: {
            Authorization: `Giftopia ${authToken}`
          }
        });
        setRows([...rows, response.data.product]);
      } else {
        const response = await axios.put(`http://localhost:3001/product/${rowToEditProductNumber}`, newRow, {
          headers: {
            Authorization: `Giftopia__ ${authToken}`
          }
        });
        setRows(rows.map(row => (row.productNumber !== rowToEditProductNumber ? row : response.data.product)));
      }
      setOpen(false);
    } catch (error) {
      alert(error.response?.data?.message || "Error submitting product");
    }
  }

  async function handleDeleteProduct(productId) {
    try {
      await axios.delete(`http://localhost:3001/product/${productId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      setRows(rows.filter(row => row._id !== productId));
    } catch (error) {
      alert(error.response?.data?.message || "Error deleting product");
    }
  }*/



  function handleSearchType(item) {

    switch (selectedSearchBy.toLowerCase()) {

      case 'product id':
        return search.toLowerCase() === '' ? item : item.productID.toLowerCase().includes(search);
      case 'product number':
        return search.toLowerCase() === '' ? item : item.productNumber.toLowerCase().includes(search);
      case 'product name':
        return search.toLowerCase() === '' ? item : item.productName.toLowerCase().includes(search);
      case 'product description':
        return search.toLowerCase() === '' ? item : item.productDiscription.toLowerCase().includes(search);
      case 'in stock':
        return search.toLowerCase() === '' ? item : item.inStock.toLowerCase().includes(search);
      case 'producr price':
        return search.toLowerCase() === '' ? item : item.price.toLowerCase().includes(search);
      case 'product discount':
        return search.toLowerCase() === '' ? item : item.discount.toLowerCase().includes(search);
      case 'product finalprice':
        return search.toLowerCase() === '' ? item : item.finalPrice.toLowerCase().includes(search);
      case 'product size':
        return search.toLowerCase() === '' ? item : item.size.toLowerCase().includes(search);
      case 'product color':
          return search.toLowerCase() === '' ? item : item.colors.toLowerCase().includes(search);
      case 'product imageurl':
        return search.toLowerCase() === '' ? item : item.imgURL.toLowerCase().includes(search);
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
          <button type="button" className="adduser-button" onClick={() => handlAdduser()}><TfiPlus /></button>
        </div>
        <div className="table">
          <table className="ordersTable">
            <thead>
              <tr>
                <th className="columnHeader">PRODUCT ID</th>
                <th className="columnHeader">PRODUCT NUMBER</th>
                <th className="columnHeader">PRODUCT NAME</th>
                <th className="columnHeader">PRODUCT DESCRIPTION</th>
                <th className="columnHeader">IN STOCK</th>
                <th className="columnHeader">PRODUCT PRICE</th>
                <th className="columnHeader">DISCOUNT</th>
                <th className="columnHeader">FINAL PRICE</th>
                <th className="columnHeader">PRODUCT SIZE</th>
                <th className="columnHeader">PRODUCT COLORS</th>
                <th className="columnHeader">IMAGEURL</th>
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
                    <td>{row.productName}</td>
                    <td>{row.productDiscription}</td>
                    <td>{row.inStock}</td>
                    <td>{row.price}</td>
                    <td>{row.discount}</td>
                    <td>{row.finalPrice}</td>
                    <td>{row.size}</td>
                    <td>{row.colors}</td>
                    <td>{row.imgURL}</td>
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