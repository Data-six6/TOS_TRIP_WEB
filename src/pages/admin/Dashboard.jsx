import {useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard(){
    return(
        <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome to the admin dashboard. Here you can manage users, destinations, and travel boards.</p>
            <nav>
                <ul>
                    <li><Link to="/admin/users">User Management</Link></li>
                    <li><Link to="/admin/destination">Destination Management</Link></li>
                    <li><Link to="/admin/board">Travel Board Management</Link></li>
                </ul>
            </nav>
        </div>
       
    )
}
export default Dashboard;