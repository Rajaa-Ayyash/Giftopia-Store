import React from "react";
import UserListRow from "../../components/UserListRow/UserListRow";
export default function UserListPage()
{
    return(
    <div className="container mt-5 ">
    <div className="row">
        <div className="col-md-12">
            <div className='d-flex justify-content-between'>
                <div className='d-flex justify-content-around'>

                    <h2 className="mb-3 me-5">User List</h2>
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
                            <th>Value of purchases</th>
                            <th>Status</th>
                            <th>Gender</th>
                            <th>edit</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$' />
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$' />
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='No' gender = 'Femail'  user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='No' gender = 'Mail'user='User' value='100$' />
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail'user='User'  value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='No' gender = 'Mail' user='User' value='150$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail'user='User' value='100$' />
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine' activeOrNo='No' gender = 'Mail'user='User' value='0$' />
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine' activeOrNo='active' gender = 'Mail'user='User' value='100$' />
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine' activeOrNo='active' gender = 'Mail'user='User'value='100$'  />
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine' activeOrNo='active' gender = 'Mail' user='User'value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>
                        <UserListRow id='123456785' name='mohammad' email='mohammad@gmail.com' location='palestine'  activeOrNo='active' gender = 'Mail' user='User' value='100$'/>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
        </div>
    )
}