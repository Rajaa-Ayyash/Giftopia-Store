// import React from 'react';

// function CategoryDropdown({ categories }) {
  return (
    <li className="nav-item dropdown dropdown-hover position-static">
      <a
        className="nav-link dropdown-toggle menu-title"
        href="#"
        id="navbarDropdown"
        role="button"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        {categories.title}
      </a>
      <div
        className="dropdown-menu w-100 mt-0"
        aria-labelledby="navbarDropdown"
        style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      >
        <div className="container">
          <div className="row my-4">
            {categories.subcategories.map((sub, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-3 mb-3 mb-lg-0"
              >
                <div className="list-group list-group-flush">
                  <h2>{sub.title}</h2>
                  {sub.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href="#"
                      className="list-group-item list-group-item-action"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
// }

// export default CategoryDropdown;




// import React from 'react';

// function CategoryDropdown({ categories }) {

//   return (
// //     <li className="nav-item dropdown dropdown-hover position-static">
// //       <a
// //         className="nav-link dropdown-toggle menu-title"
// //         href="#"
// //         id="navbarDropdown"
// //         role="button"
// //         data-mdb-toggle="dropdown"
// //         aria-expanded="false"
// //       >
// //         Categories
// //       </a>
// //       <div
// //         className="dropdown-menu w-100 mt-0"
// //         aria-labelledby="navbarDropdown"
// //         style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
// //       >
// //         <div className="container">
// //           <div className="row my-4">
// //             {/* {categories.map((category) => (
// //               <div
// //                 key={category._id}
// //                 className="col-md-6 col-lg-3 mb-3 mb-lg-0"
// //               >
// //                 <div className="list-group list-group-flush">
// //                   <h2>{category.name}</h2>
// //                   {category.subcategory.map((sub) => (
// //                     <a
// //                       key={sub._id}
// //                       href="#"
// //                       className="list-group-item list-group-item-action"
// //                     >
// //                       {sub.name}
// //                     </a>
// //                   ))}
// //                 </div>
// //               </div>
// //             ))} */}


// //             {/* {categories.subcategories && categories.subcategories.map((sub, index) => (
// //   <div key={index} className="col-md-6 col-lg-3 mb-3 mb-lg-0">
// //     <div className="list-group list-group-flush">
// //       <h2>{sub.title}</h2>
// //       {sub.items.map((item, itemIndex) => (
// //         <a key={itemIndex} href="#" className="list-group-item list-group-item-action">
// //           {item}
// //         </a>
// //       ))}
// //     </div>
// //   </div>
// // ))} */}

// //           </div>
// //         </div>
// //       </div>
// //     </li>
//   );
// }


import React from 'react'

export default function CategoryDropdown() {
  return (
    <div>CategoryDropdown</div>
  )
}
