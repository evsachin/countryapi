const places = [
  {
    name: "Taj Mahal",
    city: "Agra, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
  },
  {
    name: "Gateway of India",
    city: "Mumbai, Maharashtra",
    image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875",
  },
  {
    name: "India Gate",
    city: "New Delhi",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
  },
  {
    name: "Hawa Mahal",
    city: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
  },
  {
    name: "Amber Fort",
    city: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09e",
  },
  {
    name: "Golden Temple",
    city: "Amritsar, Punjab",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
  },
  {
    name: "Charminar",
    city: "Hyderabad, Telangana",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
  },
  {
    name: "Mysore Palace",
    city: "Mysore, Karnataka",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b",
  },
  {
    name: "Meenakshi Temple",
    city: "Madurai, Tamil Nadu",
    image: "https://images.unsplash.com/photo-1627894483216-2138af692e32",
  },
  {
    name: "Konark Sun Temple",
    city: "Konark, Odisha",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
  },
  {
    name: "Qutub Minar",
    city: "Delhi",
    image: "https://images.unsplash.com/photo-1585136917235-34b7e15f1d1c",
  },
  {
    name: "Red Fort",
    city: "Delhi",
    image: "https://images.unsplash.com/photo-1597040663342-45b6af3d91a8",
  },
  {
    name: "Lotus Temple",
    city: "Delhi",
    image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33",
  },
  {
    name: "Leh Palace",
    city: "Leh, Ladakh",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
  },
  {
    name: "Pangong Lake",
    city: "Ladakh",
    image: "https://images.unsplash.com/photo-1617377683221-5b4c9e14b5fa",
  },
  {
    name: "Dal Lake",
    city: "Srinagar, Kashmir",
    image: "https://images.unsplash.com/photo-1621336639868-5f3dc4d2d0b5",
  },
  {
    name: "Rohtang Pass",
    city: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
  },
  {
    name: "Manali",
    city: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358",
  },
  {
    name: "Shimla",
    city: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1622308644420-b20142dc993c",
  },
  {
    name: "Nainital",
    city: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d",
  },
  {
    name: "Rishikesh",
    city: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
  },
  {
    name: "Kedarnath",
    city: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
  },
  {
    name: "Goa Beaches",
    city: "Goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
  },
  {
    name: "Dudhsagar Falls",
    city: "Goa",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    name: "Alleppey Backwaters",
    city: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
  },
  {
    name: "Munnar",
    city: "Kerala",
    image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e",
  },
  {
    name: "Periyar National Park",
    city: "Kerala",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
  },
  {
    name: "Ajanta Caves",
    city: "Maharashtra",
    image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f",
  },
  {
    name: "Ellora Caves",
    city: "Maharashtra",
    image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f",
  },
  {
    name: "Statue of Unity",
    city: "Gujarat",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b",
  },
];

function IndianPlaces() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-pink-500 to-purple-700 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-white mb-3">
          🇮🇳 Incredible India
        </h1>

        <p className="text-center text-white/80 text-lg mb-10">
          Explore India's most famous tourist destinations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {places.map((place) => (
            <div
              key={place.name}
              className="group bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {place.name}
                </h3>

                <p className="text-white/80 mb-4">
                  📍 {place.city}
                </p>

                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold hover:opacity-90 transition">
                  Explore Place
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IndianPlaces;