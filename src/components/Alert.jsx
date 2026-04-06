import "../styles/components_style/Alert.css";
function PlanDrawer({ isOpen, onClose, plan, onRemove }) {
  const [currentUser, setCurrentUser] = useState(() =>
     JSON.parse(localStorage.getItem("tosTripCurrentUser") || "null")
  );
  return (
    <>

      {/* backdrop */}
      {isOpen && <div className="drawer-backdrop" onClick={onClose} />}

      <aside className={`plan-drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <h2>My Wishlist</h2>
          <button type="button" onClick={onClose} className="drawer-close">✕</button>
        </div>

        {plan.length === 0 ? (
          <p className="drawer-empty">No destinations added yet.</p>
        ) : (
          <ul className="drawer-list">
            {plan.map((item) => (
              <li key={item.title} className="drawer-item">
                <img src={item.image} alt={item.title} className="drawer-item__img" />
                <div className="drawer-item__info">
                  <p className="drawer-item__title">{item.title}</p>
                  <p className="drawer-item__location">{item.location}</p>
                </div>
                <button
                  type="button"
                  className="drawer-item__remove"
                  onClick={() => onRemove(item)}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </>
  );
}

export default PlanDrawer;