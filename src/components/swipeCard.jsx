import { useState, useEffect, use } from "react";
import "../styles/components_style/swipecard.css";
import buttonNext from "../assets/buttonNEXT.svg";
import buttonPrev from "../assets/buttonPREV.svg";
import desc from "../assets/describetionSIGN.svg";
import location from "../assets/locationSIGN.svg";
const defaultCards = [
  {
    title: "Angkor Wat",
    location: "Angkor Wat",
    description:
      "Angkor Wat, located near Siem Reap, Cambodia, is a vast temple complex built in the 12th century by King Suryavarman II. It is the world's largest religious structure, covering 400 acres, and represents the high point of Khmer architecture.",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Lazy Beach",
    location: "Koh Rong Samloem",
    description:
      "On the southwest coast of Koh Rong Sanloem, this hideaway is home to one of the most stunning beaches you'll find anywhere. There is only one place to stay here — the agreeably rustic resort that gave the beach its name.",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Phnom Penh Riverside",
    location: "Sisowath Quay",
    description:
      "Cafes spill onto the promenade, river boats drift past, and street-food vendors come alive after dark. The perfect blend of history, culture, and contemporary Cambodian city life.",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?auto=format&fit=crop&w=900&q=80",
  },
];

function SwipeVenture({ cards = defaultCards, onAddToPlan , startindex = 0 }) {
  const [idx, setIdx] = useState(startindex);
  const prev = () => setIdx((i) => (i - 1 + cards.length) % cards.length);
  const next = () => setIdx((i) => (i + 1) % cards.length);
  useEffect(() => {
  console.log("startIndex received:", startindex); 
}, [startindex]);
  const card = cards[idx];
  return (
    <div className="sv-wrap">
      <h1 className="sv-title">SwipeVenture</h1>
      <div className="sv-stage">
        {/* Prev arrow */}
        <button className="sv-arrow" type="button" onClick={prev} aria-label="Previous">
         <img src={buttonPrev} alt="Previous" />
        </button>

        {/* Card */}
        <div className="sv-card">
          <div className="sv-img-wrap">
            <img src={card.image} alt={card.title} />
            <div className="sv-img-title">{card.title}</div>
          </div>

          <div className="sv-body">
            <div className="sv-info-row">
              {/* Description */}
              <div className="sv-desc-col">
                <div className="sv-desc-label">
                  Description  <img src={desc} alt="Description" className="sv-desc-icon" />
                </div>
                <p className="sv-desc-text">{card.description}</p>
              </div>
              {/* Location */}
              <div className="sv-loc-col">
                <div className="sv-loc-icon">
                  <img src={location} alt="Location" />
                </div>
                <span className="sv-loc-label">Location</span>
                <span className="sv-loc-link">{card.location}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="sv-footer">
              <div className="sv-rating">
                Rating: {card.rating.toFixed(1)}{" "}
                <span className="sv-star">★</span>
              </div>
              <button
                type="button"
                className="sv-btn"
                onClick={() => { if (onAddToPlan) {
                      onAddToPlan(card);
                    }}}
              >
                Add To Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* Next arrow */}
        <button className="sv-arrow" type="button" onClick={next} aria-label="Next">
          <img src={buttonNext} alt="Next" />
        </button>
      </div>

      {/* Dots */}
      <div className="sv-dots">
        {cards.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`sv-dot ${i === idx ? "active" : ""}`}
            onClick={() => setIdx(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default SwipeVenture;