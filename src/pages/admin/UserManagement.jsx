import { useState, useEffect } from "react";
import "../../styles/userManagement.css";

function UserManagement() {
 
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("tosTripUsers") || "[]");
    setUsers(savedUsers);
  }, []);


  const changeStatus = (email, newStatus) => {
    const updatedUsers = users.map(user => {
      if (user.email === email) {
        return { ...user, status: newStatus };
      }
      return user;
    });
    setUsers(updatedUsers);
    localStorage.setItem("tosTripUsers", JSON.stringify(updatedUsers));
  };

return (
  <div>
    <h1>User Accounts</h1>

    {users.length === 0 && <p>No users found</p>}

    <div className="user_row">
      {users.map(user => (
        <div key={user.email} className="user_details">
          <h1>{user.username}</h1>
          <h6 className={user.status === "active" ? "status_active" : "status_deactivated"}>
            Status: {user.status}</h6>

          <div className="edit">
            <p>Change Status:</p>

            <button className="activate_button" onClick={() => changeStatus(user.email, "active")}>
              Activate
            </button>

            <button className="deactivate_button" onClick={() => changeStatus(user.email, "deactivated")}>
              Deactivate
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default UserManagement;