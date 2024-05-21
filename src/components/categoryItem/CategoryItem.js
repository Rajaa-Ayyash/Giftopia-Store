import React from 'react'
import CatDrop from '../catDrop/CatDrop.js';
export default function CategoryItem({category}) {


    return (
        <nav className="navbar navbar-expand-lg " style={{ padding: 0 }}>
          <div className="container-fluid">
            <button
              className="navbar-toggler px-0"
              type="button"
              data-mdb-collapse-init
              data-mdb-target="#navbarExampleOnHover"
              aria-controls="navbarExampleOnHover"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            <div
              className="collapse navbar-collapse w-75"
              id="navbarExampleOnHover"
            >
              <ul className="navbar-nav me-5 ms-5 ps-lg-0 d-flex justify-content-evenly w-100">
                {/* {menuTitles.map((title, index) => (
                  <MenuItem key={index} title={title} />
                ))} */}
                {/* <CategoryDropdown categories={category} /> */}
                <li className="nav-item dropdown dropdown-hover position-static">
      <a
        className="nav-link dropdown-toggle menu-title"
        href="#"
        id="navbarDropdown"
        role="button"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        category
      </a>
      <div
        className="dropdown-menu w-100 mt-0"
        aria-labelledby="navbarDropdown"
        style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      >
        <CatDrop category={category}/>


        
      </div>
    </li>
              </ul>
            </div>
          </div>
        </nav>
      );
}
