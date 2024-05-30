import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function Category() {
    const [categories, setCategories] = useState({
        title: "Category",
        subcategories: [
          {
            title: "First",
            items: [
              "Lorem ipsum",
              "Dolor sit",
              "Amet consectetur",
              "Cras justo odio",
              "Adipisicing elit",
            ],
          },
          {
            title: "Second",
            items: [
              "Explicabo voluptas",
              "Perspiciatis quo",
              "Cras justo odio",
              "Laudantium maiores",
              "Provident dolor",
            ],
          },
          {
            title: "Third",
            items: [
              "Iste quaerato",
              "Cras justo odio",
              "Est iure",
              "Praesentium",
              "Laboriosam",
            ],
          },
          {
            title: "Fourth",
            items: [
              "Cras justo odio",
              "Saepe",
              "Vel alias",
              "Sunt doloribus",
              "Cum dolores",
            ],
          },
        ],
      });
      return (
        <div className="container mt-5 mb-5">
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
                  <li className="nav-item">
                    <NavLink to='/'  className="nav-link menu-title HomeActive " href="#">
                      Home
                    </NavLink>
                  </li>

                  <li  className="nav-item">
                    <NavLink to='/ValantineProduct' className="nav-link menu-title" href="#">
                      valantine
                    </NavLink>
                  </li>

                  <li  className="nav-item">
                    <NavLink to='/BirthdayBroduct' className="nav-link menu-title" href="#">
                      Birtday
                    </NavLink>
                  </li>
                  <li  className="nav-item">
                    <NavLink to='/SearshAiPage' className="nav-link menu-title" href="#">
                    GiftGenie
                    </NavLink>
                  </li>


                  

                  

                  

{/* 
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
                  <li className="nav-item">
                    <a className="nav-link menu-title" href="#">
                      MEN'S
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link menu-title" href="#">
                      WOMEN'S
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link menu-title" href="#">
                      BLOG
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link menu-title" href="#">
                      HOT OFFERS
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
}
