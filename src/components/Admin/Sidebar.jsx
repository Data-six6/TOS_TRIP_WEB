import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ onNavigate, activePage }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleNavigation = (page) => {
    if (page === 'logout') {
      setShowLogoutConfirm(true);
    } else {
      onNavigate(page);
    }
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log('User logged out');
    setShowLogoutConfirm(false);
    // Redirect to login page or clear session
  };

  const menuItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'user-management', label: 'User Management', icon: '👥' },
    { id: 'destination', label: 'Destination', icon: '🌍' },
    { id: 'attraction-spot', label: 'Attraction Spot', icon: '🏛️' },
    { id: 'hidden-gem', label: 'Hidden Gem', icon: '💎' },
    { id: 'travel-board', label: 'Travel Board', icon: '📌' },
    { id: 'logout', label: 'Logout', icon: '🚪' }
  ];

  return (
    <>
      <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        {/* Sidebar Header with Logo */}
        <div className="sidebar-header">
          <div className="logo-container">
            {!isCollapsed && (
              <div className="logo">
                <span className="logo-icon">✈️</span>
                <span className="logo-text">TravelAdmin</span>
              </div>
            )}
            {isCollapsed && (
              <div className="logo-mini">
                <span className="logo-icon">✈️</span>
              </div>
            )}
          </div>
          <button className="toggle-btn" onClick={toggleSidebar}>
            {isCollapsed ? '→' : '←'}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="sidebar-nav">
          <ul className="nav-menu">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-item ${activePage === item.id ? 'active' : ''} ${item.id === 'logout' ? 'logout-btn' : ''}`}
                  onClick={() => handleNavigation(item.id)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {!isCollapsed && <span className="nav-label">{item.label}</span>}
                  {!isCollapsed && item.id === 'logout' && (
                    <span className="logout-arrow">→</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Section (Optional) */}
        {!isCollapsed && (
          <div className="sidebar-footer">
            <div className="version-info">
              <span>Version 1.0.0</span>
            </div>
          </div>
        )}
      </aside>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-icon">🚪</span>
              <h3>Confirm Logout</h3>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to logout?</p>
              <p className="modal-warning">You will need to login again to access your account.</p>
            </div>
            <div className="modal-footer">
              <button className="modal-btn cancel-btn" onClick={() => setShowLogoutConfirm(false)}>
                Cancel
              </button>
              <button className="modal-btn confirm-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;