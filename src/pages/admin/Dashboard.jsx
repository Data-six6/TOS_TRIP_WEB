import {useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard(){
    return(
        <div className="dashboard">
            <h1>Admin Dashboard</h1>
            <p>Welcome to the admin dashboard. Here you can manage users, destinations, and travel boards.</p>
        </div>
    )
}
export default Dashboard;