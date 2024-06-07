import React from 'react'
import "./AdminDashboard.css"
import {useNavigate } from 'react-router-dom'
export default function AdminDashboard() {
    const navigate = useNavigate();
  return (
    <div className='dashboard-body'>
        <div className='dashboard-navigation'>
            <div className='dashboard-navigation-buttons'>
                    <div className='dashboard-first-row-of-buttons'>
                        <button  onClick={() => navigate('/admins')} className='dashboard-admins-list-button'>Admins</button>
                        <button  onClick={() => navigate('/users')} className='dashboard-users-list-button'>Users</button>
                    </div>
                    <div className='dashboard-second-row-of-buttons'>
                        <button  onClick={() => navigate('/productmangmantpage')} className='dashboard-products-list-button'>Products</button>
                        <button  onClick={() => navigate('/catagories')} className='dashboard-catagories-list-button'>Catagories</button>
                    </div>
            </div>
        </div>
    </div>
  )
}
