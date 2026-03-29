import pin from "../assets/Pin_svg.svg";
import "../styles/tos.css";

const featuredSpot = {
  name: "Koh Rong Samloem",
  location: "Koh Rong",
  image:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
};

const regions = ["Phnom Penh", "Koh Rong", "Siem Reap"];

const exploreCards = [
  {
    title: "Tour Bus",
    location: "Phnom Penh City",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Night Cruise",
    location: "Phnom Penh City",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Killing Fields",
    location: "Phnom Penh City",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Bassac Lane",
    location: "Phnom Penh City",
    image:
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Royal Palace",
    location: "Phnom Penh City",
    image:
      "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "National Museum",
    location: "Phnom Penh City",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Wat Phnom",
    location: "Phnom Penh City",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Sunset Cruise",
    location: "Phnom Penh City",
    image:
      "https://images.unsplash.com/photo-1470219556762-1771e7f9427d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Central Market",
    location: "Phnom Penh City",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
];

function TOSPage() {
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
                <h2>{featuredSpot.name}</h2>
                <p className="tos-feature-card__location">
                  <img src={pin} alt="" aria-hidden="true" />
                  <span>{featuredSpot.location}</span>
                </p>
              </div>

              <button type="button" className="tos-feature-card__button">
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
              <button key={region} type="button" className="tos-filter-pill">
                {region}
              </button>
            ))}
          </div>

          <div className="tos-grid">
            {exploreCards.map((card) => (
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
