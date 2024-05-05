import React from 'react'
import "./AdminDashboard.css"
export default function AdminDashboard() {
  return (
    <div className='dashboard-body'>
        <div className='dashboard-navigation'>
            <div className='dashboard-forms'>
                <div className='dashboard-forms-first-row'>
                    <form action='/admins' method='get'>
                        <input type='submit' className='dashboard-admins-list-input' value='Admins'/>
                    </form>
                    <form action='/users' method='get'>
                        <input type='submit' className='dashboard-users-list-input' value='Users'/>
                    </form>
                </div>
                <div className='dashboard-forms-second-row'>
                    <form action='/products' method='get'>
                        <input type='submit' className='dashboard-products-input' value='Products'/>
                    </form>
                    <form action='/catagories' method='get'> 
                        <input type='submit' className='dashboard-catagories-input' value='Catagories'/>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}