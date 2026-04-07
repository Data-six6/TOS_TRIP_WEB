// src/components/CambodiaBoard.jsx
import visionboard2 from "../assets/visionboard2.svg";
import "../styles/boardpage.css";

function CambodiaBoard({ orderedPlaces, removing, onRemove }) {
  return (
    <div className="board-wrapper theme-vision2">
      {/* The new SVG board replaces the default one */}
      <img src={visionboard2} className="board" alt="Cambodia Board" />

      {orderedPlaces.length === 0 ? (
        <div className="board-empty">
          <p>Currently, You don't add any place!</p>
        </div>
      ) : (
        <div className="board-photos">
          {orderedPlaces.map((place, index) => (
            <div
              key={place.title}
              className={`board-photo board-photo--${index} ${
                removing === place.title ? "removing" : ""
              }`}
            >
              <img src={place.image} alt={place.title} />
              <button
                className="board-photo__remove"
                onClick={() => onRemove(place)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CambodiaBoard;
