import { useState, useEffect } from "react";
import "../styles/components_style/swipecard.css";
import buttonNext from "../assets/buttonNEXT.svg";
import buttonPrev from "../assets/buttonPREV.svg";
import desc from "../assets/describetionSIGN.svg";
import location from "../assets/locationSIGN.svg";
import exploreCards from "../data/exploreCards";

function SwipeVenture({ cards = exploreCards, onAddToPlan, startIndex = 0 }) {
  const [idx, setIdx] = useState(startIndex);

  useEffect(() => {
    setIdx(startIndex);
  }, [startIndex]);

  const prev = () => setIdx((i) => (i - 1 + cards.length) % cards.length);
  const next = () => setIdx((i) => (i + 1) % cards.length);

  const card = cards[idx];
  if (!card) return null;

  return (
    <div className="sv-wrap">
      <h1 className="sv-title">SwipeVenture</h1>
      <div className="sv-stage">
        <button className="sv-arrow" type="button" onClick={prev} aria-label="Previous">
          <img src={buttonPrev} alt="Previous" />
        </button>

        <div className="sv-card">
          <div className="sv-img-wrap">
            <img src={card.image} alt={card.title} />
            <div className="sv-img-title">{card.title}</div>
          </div>

          <div className="sv-body">
            <div className="sv-info-row">
              <div className="sv-desc-col">
                <div className="sv-desc-label">
                  Description <img src={desc} alt="Description" className="sv-desc-icon" />
                </div>
                <p className="sv-desc-text">{card.description}</p>
              </div>

              <div className="sv-loc-col">
                <div className="sv-loc-icon">
                  <img src={location} alt="Location" />
                </div>
                <span className="sv-loc-label">Location</span>
                <a
                    href={`https://www.google.com/maps?q=${encodeURIComponent(
                      card.title + " " + card.location
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sv-loc-link"
                    style={{ textDecoration: "none" }}
                  >
                     {card.location}
                  </a>
              </div>
            </div>

            <div className="sv-footer">
              <div className="sv-rating">
                Rating: {card.rating.toFixed(1)}{" "}
                <span className="sv-star">★</span>
              </div>
              <button
                type="button"
                className="sv-btn"
                onClick={() => onAddToPlan?.(card)}
              >
                Add To Wishlist
              </button>
            </div>
          </div>
        </div>

        <button className="sv-arrow" type="button" onClick={next} aria-label="Next">
          <img src={buttonNext} alt="Next" />
        </button>
      </div>

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