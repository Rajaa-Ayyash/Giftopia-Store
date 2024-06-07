import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../../sheare/productCard/ProductCard.js';



export default function ValantineProduct() {

    const [products,setProducts] = useState([]);

    useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await axios.get('http://localhost:6060/webProduct/getDataValantine');
    console.log(response.data.message);
    setProducts(response.data.message);

  };


  return (
    <div className='container mt-5'>

    <div className='row'>

      <div className='col-8'>
          <div className="row">
              <div className="col">

              <label className='d-block mb-1'>Display</label>
                <select className="form-select" aria-label="Display number">
                  <option selected>4</option>
                  <option value={8}>8</option>
                  <option value={12}>12</option>
                </select>
              </div>
              <div className="col">
              <label className='d-block mb-1'>Sort by</label>
                <select className="form-select" aria-label="Sort by">
                  <option selected>price</option>
                  <option value="name">name</option>
                  <option value="date">date</option>
                </select>
              </div>
              <div className="col">
              <label className='d-block mb-1'>mine price</label>
                <input type="number" className="form-control" placeholder="min price" aria-label="Minimum price" />
              </div>
              <div className="col">
              <label className='d-block mb-1'>max price</label>

                <input type="number" className="form-control" placeholder="max price" aria-label="Maximum price" />
              </div>
              <div className="col go-btn mt-4">
                <label></label>
                <button type="submit" className="btn btn-primary">Go</button>
              </div>
              <div className="col-3 mt-4">
                <button type="button" className="btn btn-outline-secondary">Reset all inputs</button>
              </div>

            </div>

      </div>


        

          <div className="col-4 ">

            <div className='row'>
              <div className='col-7 mt-4'>
               <input type="text" id="fname" name="fname"  placeholder="searsh"/>
               </div>
               <div className="col-3">
                <label></label>
                <button type="submit" className="btn btn-primary">search</button>
            </div>
            </div>




       

         </div>


    </div>

    <h2>low</h2>
      <div className='row' >
    
        {products.filter(product =>product['PriceCategory'] == 'Low').map((product)=>{
            return <ProductCard img = {product['ImageURL']}  name = {product['Title']} price = {parseInt(product['Price'])} key = {product._id}  />
        })}



      </div>


    <h2>Medium</h2>
    <div className='row' >
      

        {products.filter(product =>product['PriceCategory'] == 'Medium').map((product)=>{
            return <ProductCard img = {product['ImageURL']}  name = {product['Title']} price = {parseInt(product['Price'])}  key = {product._id} />
        })}



      </div>

    

      <h2>High</h2>
      <div className='row' >
    

        {products.filter(product =>product['PriceCategory'] == 'High').map((product)=>{
            return <ProductCard img = {product['ImageURL']}  name = {product['Title']} price = {parseInt(product['Price'])}  key = {product._id} />
        })}



      </div>


      



    </div>
    
  )
}
