const exploreCards = [
  // --- Phnom Penh ---
  {
    title: "Aeon Mall Phnom Penh",
    location: "Phnom Penh City",
    description:
      "Cambodia's premier shopping destination, Aeon Mall blends international brands with local food courts, a cinema, and an ice skating rink. A go-to spot for locals and tourists looking for a modern urban experience in the heart of the capital.",
    rating: 4.1,
    image:
      "https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?auto=format&fit=crop&w=900&q=80",
    mapLink: `https://www.google.com/maps?q=`,
  },
  {
    title: "Olympic Stadium",
    location: "Phnom Penh City",
    description:
      "Designed by legendary Khmer architect Vann Molyvann in the 1960s, this iconic stadium is a masterpiece of New Khmer architecture. Every evening, locals gather here to exercise, play sports, and socialize — a true pulse of Phnom Penh life.",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=900&q=80",
    mapLink: `https://www.google.com/maps?q=`,
  },
  {
    title: "Chroy Changvar Bridge View",
    location: "Phnom Penh City",
    description:
      "Stretching across the Tonle Sap and Mekong rivers, Chroy Changvar offers one of the most breathtaking sunset views in Phnom Penh. The riverfront promenade is perfect for an evening stroll with stunning reflections on the water.",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?auto=format&fit=crop&w=900&q=80",
    mapLink: `https://www.google.com/maps?q=`,
  },

  // --- Siem Reap ---
  {
    title: "Angkor Wat Sunrise",
    location: "Siem Reap",
    description:
      "Watching the sun rise over Angkor Wat's iconic towers — reflected perfectly in the lotus pond — is a bucket-list moment. Built in the 12th century by King Suryavarman II, this UNESCO World Heritage Site is the world's largest religious monument.",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    mapLink: `https://www.google.com/maps?q=`,
  },
  {
    title: "Pub Street Nightlife",
    location: "Siem Reap",
    description:
      "The beating heart of Siem Reap after dark, Pub Street is lined with bars, live music venues, and restaurants serving everything from Khmer street food to international cuisine. Vibrant, energetic, and always alive with travelers from around the world.",
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80",
    mapLink: `https://www.google.com/maps?q=`,
  },
  {
    title: "Tonle Sap Floating Village",
    location: "Siem Reap",
    description:
      "One of Southeast Asia's largest freshwater lakes, Tonle Sap is home to entire communities living on the water. Boat tours through the floating villages offer a rare and humbling glimpse into a way of life that has existed for centuries.",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=80",
    mapLink: `https://www.google.com/maps?q=`,
  },

  // --- Islands ---
  {
    title: "Long Beach",
    location: "Koh Rong",
    description:
      "Stretching over 7 kilometers, Long Beach on Koh Rong is one of Cambodia's most pristine coastlines. With powdery white sand, crystal-clear turquoise water, and almost no development, it feels like a secret that the world hasn't found yet.",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    mapLink: `https://www.google.com/maps?q=`,
  },
  {
    title: "Bioluminescent Plankton",
    location: "Koh Rong",
    description:
      "After dark, the waters around Koh Rong glow a magical electric blue thanks to bioluminescent plankton. Swimming through this natural phenomenon is one of the most surreal and unforgettable experiences Cambodia has to offer.",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    mapLink: `https://www.google.com/maps?q=`,
  },

  // --- Adventure ---
  {
    title: "Cardamom Mountains Trek",
    location: "Southwest Cambodia",
    description:
      "One of Southeast Asia's last great wilderness areas, the Cardamom Mountains are home to dense rainforest, rare wildlife, and rushing waterfalls. Multi-day treks through this untouched landscape are ideal for serious adventurers seeking nature at its rawest.",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    mapLink: `https://www.google.com/maps?q=`,
  },
  {
    title: "Waterfall Camping",
    location: "Mondulkiri",
    description:
      "Mondulkiri's rolling green hills and thundering waterfalls make it Cambodia's most scenic province. Camp overnight beside Bou Sra Waterfall — one of the largest in the country — and wake up to birdsong and cool mountain mist.",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    mapLink: `https://www.google.com/maps?q=`,
  },

  // --- Culture ---
  {
    title: "Traditional Apsara Dance",
    location: "Siem Reap",
    description:
      "Apsara dance is one of Cambodia's most treasured art forms, with origins dating back to the Angkor Empire. Dancers in elaborate golden costumes perform intricate movements that tell stories of gods, spirits, and ancient legends.",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
    mapLink: `https://www.google.com/maps?q=`,
  },
  {
    title: "Local Village Experience",
    location: "Battambang",
    description:
      "Battambang's countryside is dotted with traditional Khmer villages where life moves at a gentle pace. Join local families for home-cooked meals, learn traditional crafts, and cycle through rice paddies for an authentic glimpse into rural Cambodian culture.",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=900&q=80",
    mapLink: `https://www.google.com/maps?q=`,
  },

  // --- Unique experiences ---
  {
    title: "Bamboo Train Ride",
    location: "Battambang",
    description:
      "The norry — a makeshift bamboo platform on train wheels powered by a small motor — is one of Cambodia's quirkiest attractions. Glide through the countryside on this improvised rail experience that locals have used for decades.",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80",
    mapLink: `https://www.google.com/maps?q=`,
  },
  {
    title: "Pepper Farm Tour",
    location: "Kampot",
    description:
      "Kampot pepper is considered among the finest in the world, prized by top chefs globally. Tour the lush riverside farms, learn about the cultivation process, and taste fresh green, red, and black peppercorns straight from the vine.",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
    mapLink: `https://www.google.com/maps?q=`,
  },
];

export default exploreCards;