import folder from '../../assets/folder.svg'
import "../../styles/adminHome.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function HomeAdmin (){
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalDestinations, setTotalDestinations] = useState(0);
    const [totalAttractions, setTotalAttractions] = useState(0);

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const destinations = JSON.parse(localStorage.getItem("destinations") || "[]");
        const attractions = JSON.parse(localStorage.getItem("attractions") || "[]");

        setTotalUsers(users.length);
        setTotalDestinations(destinations.length);
        setTotalAttractions(attractions.length);
  }, []);
  const navigate = useNavigate();
    return(
        <div className='body'>
            <div className='c1'>
<div className="welcomeadmin">
                <h4>
                    Welcome
                </h4>
            </div>
            <div className="quickLabel">
                <h5>Quick Access</h5>
            </div> 
            <div className='container'>
                <div className="user_management_folder" onClick={() => navigate("/admin/users")}>
                    <img src={folder} alt="folder" />
                    <h5>User Management</h5>
                </div>
                <div className="destination_management_folder" onClick={() => navigate("/admin/destination")}>
                    <img src={folder} alt="folder" />
                    <h5>Destination Management</h5>
                </div>
                <div className="travel_board" onClick={() => navigate("/admin/board")}>
                    <img src={folder} alt="folder" />
                    <h5>Travel Board</h5>
                </div>
            </div>
            </div>
            
        
            <div className='HomeDashboard'>
                <div className='Dashboard_card'>
                    <h2>{totalUsers}</h2>
                    <h6>Total Users</h6>
                </div>
                <div className='Dashboard_card'>
                    <h2>{totalDestinations}</h2>
                    <h6>Total Destination</h6>
                </div>
                <div className='Dashboard_card'>
                    <h2>{totalAttractions}</h2>
                    <h6>Total Attraction</h6>
                </div>
            </div>
        </div>
    )
}
export default HomeAdmin;