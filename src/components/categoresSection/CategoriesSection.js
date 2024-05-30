// import React, { useEffect, useState } from 'react'
// // import React, { useState, useRef, useEffect } from 'react';

// import Category from '../category/Category.js';
// import './category.css'
// import axios from 'axios';




// const categoriesData = {
//     title: "Category",
//     subcategories: [
//       {
//         title: "First",
//         items: [
//           "Lorem ipsum",
//           "Dolor sit",
//           "Amet consectetur",
//           "Cras justo odio",
//           "Adipisicing elit",
//         ],
//       },
//       {
//         title: "Second",
//         items: [
//           "Explicabo voluptas",
//           "Perspiciatis quo",
//           "Cras justo odio",
//           "Laudantium maiores",
//           "Provident dolor",
//         ],
//       },
//       {
//         title: "Third",
//         items: [
//           "Iste quaerato",
//           "Cras justo odio",
//           "Est iure",
//           "Praesentium",
//           "Laboriosam",
//         ],
//       },
//       {
//         title: "Fourth",
//         items: [
//           "Cras justo odio",
//           "Saepe",
//           "Vel alias",
//           "Sunt doloribus",
//           "Cum dolores",
//         ],
//       },
//     ],
//   };
  
//   const menuTitles = ["Home", "MEN'S", "WOMEN'S", "BLOG", "HOT OFFERS"];
  



// export default function CategoriesSection() {
//   const [category,setGategory] = useState([]);

// useEffect(()=>{
//   getCategory();
// },[])

// const getCategory = async ()=>{
//   const getCategorys = await axios.get('http://localhost:6060/category')

//   console.log(getCategorys.data.message)

//   setGategory(getCategorys.data.message)
// }


//   return (
// <div className="container mt-5 mb-5">
//       <Category categories={categoriesData} menuTitles={menuTitles} />
//       <div>dd</div>

//     </div>
    
//   )
// }


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import category from '../category/Category.js';
// import Category from '../category/Category.js';

// export default function CategorySection() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     getCategory();
//   }, []);

//   const getCategory = async () => {
//     const response = await axios.get('http://localhost:6060/category');
//     setCategories(response.data);
//   };

//   return (
//     <div className="container mt-5 mb-5">
//       <Category categories={categories} />
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Category from '../category/Category.js';

export default function CategorySection() {

  const [categories, setCategories] = useState([]);
  console.log(categories)

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const response = await axios.get('http://localhost:6060/category');
    setCategories(response.data.message);
  };

  

  return (
    <div className="container mt-5 mb-5">
      <Category categories={categories} />
    </div>
  );
}
