import { useState } from "react";
import exploreCards from "../../data/exploreCards";
import "../../styles/admin/destination.css";

function Destination() {
  const currentUser = JSON.parse(localStorage.getItem("tosTripCurrentUser") || "null");

  const [datacards, setDataCards] = useState(() => {
    const saved = localStorage.getItem("exploreCards");
    const parsed = saved ? JSON.parse(saved) : [];
    return parsed.length > 0 ? parsed : exploreCards;
  });

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({});

  // group by location
  const grouped = datacards.reduce((acc, item) => {
    const key = item.location;
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});  

  const locations = Object.keys(grouped);

  // open folder
  const handleFolderClick = (loc) => {
    setSelectedLocation(loc);
    setSelectedCard(null);
  };

  // open modal
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setForm({ ...card });
    setModalOpen(true);
  };

  // close modal
  const handleClose = () => {
    setModalOpen(false);
    setSelectedCard(null);
  };

  // handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // handle image upload → base64
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setForm((prev) => ({ ...prev, image: reader.result }));
    reader.readAsDataURL(file);
  };

  // save edits
  const handleSave = () => {
    const updated = datacards.map((c) =>
      c.title === selectedCard.title ? { ...c, ...form, rating: parseFloat(form.rating) } : c
    );4
    setDataCards(updated);
    localStorage.setItem("exploreCards", JSON.stringify(updated));
    handleClose();
  };

  // delete card
  const handleDelete = () => {
    const updated = datacards.filter((c) => c.title !== selectedCard.title);
    setDataCards(updated);
    localStorage.setItem("exploreCards", JSON.stringify(updated));
    handleClose();
  };

  return (
    <main className="dest-page">
      <div className="dest-layout">
        {/* ── Left ── */}
        <div className="dest-left">
          <div className="dest-welcome">
            <h2>Welcome back{currentUser ? `, ${currentUser.username}` : ""}!</h2>
          </div>

          <div className="dest-section-title">Destination Management</div>

          <div className="dest-folders">
            {locations.map((loc) => (
              <div
                key={loc}
                className={`dest-folder ${selectedLocation === loc ? "active" : ""}`}
                onClick={() => handleFolderClick(loc)}
              >
                <div className="dest-folder__icon">
                  <svg viewBox="0 0 100 80" fill="none">
                    <path d="M0 16C0 10 4 8 8 8H36L44 20H92C96 20 100 24 100 28V72C100 76 96 80 92 80H8C4 80 0 76 0 72V16Z" fill="#d4924a"/>
                    <path d="M0 28H100V72C100 76 96 80 92 80H8C4 80 0 76 0 72V28Z" fill="#e8a84a"/>
                  </svg>
                </div>
                <span className="dest-folder__label">{loc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right — place list ── */}
        <div className="dest-right">
          {selectedLocation ? (
            <>
              <div className="dest-panel-header">{selectedLocation}</div>
              <div className="dest-panel-list">
                {grouped[selectedLocation].map((card) => (
                  <div
                    key={card.title}
                    className="dest-panel-item"
                    onClick={() => handleCardClick(card)}
                  >
                    {card.title}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="dest-panel-empty">Select a folder to view places</div>
          )}
        </div>
      </div>

      {/* ── Modal ── */}
      {modalOpen && (
        <div className="dest-backdrop" onClick={handleClose}>
          <div className="dest-modal" onClick={(e) => e.stopPropagation()}>
            <div className="dest-modal__header">
              <span>{selectedCard?.title}</span>
              <button className="dest-modal__close" onClick={handleClose}>✕</button>
            </div>

            <div className="dest-modal__body">
              <div className="dest-field">
                <label>Title</label>
                <input name="title" value={form.title || ""} onChange={handleChange} />
              </div>

              <div className="dest-field-row">
                <div className="dest-field">
                  <label>Map Link</label>
                  <input name="location" value={form.mapLink || ""} onChange={handleChange} />
                </div>
                <div className="dest-field">
                  <label>Rating</label>
                  <input name="rating" type="number" min="0" max="5" step="0.1" value={form.rating || ""} onChange={handleChange} />
                </div>
              </div>

              <div className="dest-field">
                <label>Description</label>
                <textarea name="description" value={form.description || ""} onChange={handleChange} />
              </div>

              <div className="dest-field">
                <label>Upload Image</label>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
              </div>

              <div className="dest-divider">— or paste URL —</div>

              <div className="dest-field">
                <label>Image Link</label>
                <input name="image" value={form.image?.startsWith("data:") ? "" : form.image || ""} onChange={handleChange} placeholder="https://..." />
              </div>

              {form.image && (
                <img
                  src={form.image}
                  alt="preview"
                  className="dest-preview"
                  onError={(e) => e.target.style.display = "none"}
                />
              )}
            </div>

            <div className="dest-modal__footer">
              <button className="dest-btn-delete" onClick={handleDelete}>Delete</button>
              <button className="dest-btn-save" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Destination;