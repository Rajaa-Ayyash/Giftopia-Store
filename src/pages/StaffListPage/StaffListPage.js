import React from "react";
import UserListRow from "../../components/UserListRow/UserListRow";
export default function StaffListPage()
{
    return(
    <div className="container mt-5 ">
            <div className="row">
                <div className="col-md-12">
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex justify-content-around'>

                            <h2 className="mb-3 me-5">Staff List</h2>
                            <button className="btn btn-red mb-3 ms-5">ADD NEW +</button>
                        </div>

                        <div className="search-container">
                            <input type="text" name="search" placeholder="Search..." className="search-input" />
                            <a href="#" className="search-btn">
                                <i className="fas fa-search" />
                            </a>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Location</th>
                                    <th>Working hours</th>
                                    <th>Status</th>
                                    <th>Gender</th>
                                    <th>edit</th>
                                    <th>delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine' timeWork='8:00Am - 9:00pm' activeOrNo='active' gender = 'Mail' />
                                <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine' timeWork='8:00Am - 9:00pm' activeOrNo='active' gender = 'Mail' />
                                <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine' timeWork='8:00Am - 9:00pm' activeOrNo='No' gender = 'Femail' />
                                <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine' timeWork='8:00Am - 9:00pm' activeOrNo='No' gender = 'Mail' />
                                <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine' timeWork='8:00Am - 9:00pm' activeOrNo='active' gender = 'Mail' />
                                <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine' timeWork='8:00Am - 9:00pm' activeOrNo='active' gender = 'Mail' />
                                <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine' timeWork='8:00Am - 9:00pm' activeOrNo='No' gender = 'Mail' />
                                <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine' timeWork='8:00Am - 9:00pm' activeOrNo='active' gender = 'Mail' />
                                <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine' timeWork='8:00Am - 9:00pm' activeOrNo='No' gender = 'Mail' />
                                <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine' timeWork='8:00Am - 9:00pm' activeOrNo='active' gender = 'Mail' />
                                <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine' timeWork='8:00Am - 9:00pm' activeOrNo='active' gender = 'Mail' />
                                <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine' timeWork='8:00Am - 9:00pm' activeOrNo='active' gender = 'Mail' />
                                <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine' timeWork='8:00Am - 9:00pm' activeOrNo='active' gender = 'Mail' />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}