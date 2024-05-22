// import React from 'react'

// export default function CatDrop({category}) {
//     console.log(category)
//   return (
//     <li className="nav-item dropdown dropdown-hover position-static">
//     <a
//       className="nav-link dropdown-toggle menu-title"
//       href="#"
//       id="navbarDropdown"
//       role="button"
//       data-mdb-toggle="dropdown"
//       aria-expanded="false"
//     >
//       {category.name}
//     </a>
//     <div
//       className="dropdown-menu w-100 mt-0"
//       aria-labelledby="navbarDropdown"
//       style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
//     >
//       <div className="container">
//         <div className="row my-4">
//           {category.subcategory.map((sub, index) => (
//             <div
//               key={sub._id}
//               className="col-md-6 col-lg-3 mb-3 mb-lg-0"
//             >
//               <div className="list-group list-group-flush">
//                 <h2>{sub.name}</h2>
//                 {sub.map((item, itemIndex) => (
//                   <a
//                     key={itemIndex}
//                     href="#"
//                     className="list-group-item list-group-item-action"
//                   >
//                     {item}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </li>  
// )
// }

import React from 'react'

export default function CatDrop({ category }) {
  console.log(category)
  return (
    <div className="container">
          <div className="row my-4">
            {category.subcategory.map((sub, index) => (
              <div
                key={sub._id}
                className="col-md-6 col-lg-3 mb-3 mb-lg-0"
              >
                <div className="list-group list-group-flush">
                  <h2>{sub.name}</h2>
                  {/* تأكد من استخدام حقل صحيح يحتوي على القيم */}
                  {sub.items && sub.items.map((item, itemIndex) => (
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
   
  )
}

