// Board.jsx (Admin Side)
import { useState } from "react";
import defaultBoard from "../../assets/VisionBoard.svg";
import cambodiaBoard from "../../assets/visionboard2.svg";


function Board() {
  const [active, setActive] = useState(localStorage.getItem("boardDesign") || "default");

  const changeTheme = (theme) => {
    localStorage.setItem("boardDesign", theme);
    setActive(theme);
    window.dispatchEvent(new Event("storage")); // Notifies the user tab
  };

  return (
    <div className="admin-board-container" style={{ padding: '2rem' }}>
      <h1>Board Theme Management</h1>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        
        {/* Option 1: Default */}
        <div 
          onClick={() => changeTheme('default')}
          style={{ 
            cursor: 'pointer', 
            border: active === 'default' ? '4px solid #007bff' : '2px solid #ccc',
            borderRadius: '10px', padding: '10px', width: '250px' 
          }}
        >
          <img src={defaultBoard} style={{ width: '100%', borderRadius: '5px' }} />
          <h3 style={{ textAlign: 'center' }}>Default Design</h3>
        </div>

        {/* Option 2: Cambodia */}
        <div 
          onClick={() => changeTheme('visionBoard_2')}
          style={{ 
            cursor: 'pointer', 
            border: active === 'visionBoard_2' ? '4px solid #007bff' : '2px solid #ccc',
            borderRadius: '10px', padding: '10px', width: '250px' 
          }}
        >
          <img src={cambodiaBoard} style={{ width: '100%', borderRadius: '5px' }} />
          <h3 style={{ textAlign: 'center' }}>VisionBoard 2</h3>
        </div>

      </div>
    </div>
  );
}

export default Board;
