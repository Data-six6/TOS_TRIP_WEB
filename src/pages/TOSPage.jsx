import pin from "../assets/Pin_svg.svg";
import "../styles/tos.css";
import exploreCards from "../data/exploreCards";
import { useState } from "react";

const regions = ["Phnom Penh", "Koh Rong", "Siem Reap"];

function TOSPage({ cards = exploreCards }) {
  const [featuredIndex] = useState(() =>
    Math.floor(Math.random() * cards.length)
  );
  const [activeRegion, setActiveRegion] = useState(null);

  const featuredSpot = cards[featuredIndex];

  const filteredCards = activeRegion
    ? cards.filter((c) => c.location.includes(activeRegion))
    : cards;
  const addToPlan = (item) => {
    try {
      const plan = JSON.parse(localStorage.getItem("savedPlan") || "[]");
      if (!plan.some((x) => x.title === item.title)) {
        plan.push(item);
        localStorage.setItem("savedPlan", JSON.stringify(plan));
      }
    } catch {
      console.warn("Could not save to plan");
    }
  };

  return (
    <main className="tos-page">
      <section className="tos-layout">
        <aside className="tos-feature">
          <article
            className="tos-feature-card"
            style={{ backgroundImage: `url(${featuredSpot.image})` }}
          >
            <div className="tos-feature-card__content">
              <div>
                <h2>{featuredSpot.title}</h2>
                <p className="tos-feature-card__location">
                  <img src={pin} alt="" aria-hidden="true" />
                  <span>{featuredSpot.location}</span>
                </p>
              </div>
              <button
                type="button"
                className="tos-feature-card__button"
                onClick={() => addToPlan(featuredSpot)}
              >
                Add to plan
              </button>
            </div>
          </article>

          <button type="button" className="tos-quick-swipe">
            Quick Swipe
          </button>
        </aside>

        <section className="tos-explore" aria-labelledby="tos-explore-heading">
          <h1 id="tos-explore-heading">Explore</h1>

          <div className="tos-filters" aria-label="Explore regions">
            {regions.map((region) => (
              <button
                key={region}
                type="button"
                className={`tos-filter-pill ${activeRegion === region ? "active" : ""}`}
                onClick={() =>
                  setActiveRegion((prev) => (prev === region ? null : region))
                }
              >
                {region}
              </button>
            ))}
          </div>

          <div className="tos-grid">
            {filteredCards.map((card) => (
              <article
                key={card.title}
                className="tos-spot-card"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="tos-spot-card__overlay">
                  <div className="tos-spot-card__text">
                    <h2>{card.title}</h2>
                    <p>{card.location}</p>
                  </div>
                  <button
                    type="button"
                    className="tos-spot-card__add"
                    aria-label={`Add ${card.title} to plan`}
                    onClick={() => addToPlan(card)}
                  >
                    +
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default TOSPage;