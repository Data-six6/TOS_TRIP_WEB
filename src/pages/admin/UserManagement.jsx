import { useState, useEffect } from "react";
import "../../styles/userManagement.css";

function UserManagement() {
  // Single state to store all users
  const [users, setUsers] = useState([]);

  // Load users from localStorage
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(savedUsers);
  }, []);

  // Change status for a specific user using email as unique key
  const changeStatus = (email, newStatus) => {
    const updatedUsers = users.map(user => {
      if (user.email === email) {
        return { ...user, status: newStatus };
      }
      return user;
    });
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

return (
  <div>
    <h1>User Accounts</h1>

    {users.length === 0 && <p>No users found</p>}

    <div className="user_row">
      {users.map(user => (
        <div key={user.email} className="user_details">
          <h1>{user.name}</h1>
          <h6 className={user.status === "active" ? "status_active" : "status_deactivated"}>
            Status: {user.status}</h6>

          <div className="edit">
            <p>Change Status:</p>

            <button
              className="activate_button"
              onClick={() => changeStatus(user.email, "active")}
            >
              Activate
            </button>

            <button
              className="deactivate_button"
              onClick={() => changeStatus(user.email, "deactivated")}
            >
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