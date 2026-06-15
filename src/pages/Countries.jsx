import React, { useEffect, useState } from "react";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredCountries(filtered);
  }, [search, countries]);

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/info?returns=flag,unicodeFlag,currency,capital"
      );

      const result = await response.json();

      const sorted = result.data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      setCountries(sorted);
      setFilteredCountries(sorted);
    } catch (error) {
      console.error("Failed to fetch countries:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
        <h2 className="text-white text-2xl font-bold">
          Loading Countries...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-white mb-6">
          🌍 Countries Explorer
        </h1>

        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search Country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-lg px-4 py-3 rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-4 focus:ring-pink-400"
          />
        </div>

        {/* Country Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredCountries.map((country, index) => (
            <div
              key={`${country.name}-${index}`}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300"
            >
              {country.flag && (
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-full h-16 md:h-24 object-cover"
                />
              )}

              <div className="p-2">
                <h2 className="text-white text-xs md:text-sm font-bold truncate">
                  {country.unicodeFlag} {country.name}
                </h2>

                <p className="text-gray-300 text-[10px] md:text-xs truncate mt-1">
                  📍 {country.capital || "N/A"}
                </p>

                <p className="text-gray-300 text-[10px] md:text-xs truncate">
                  💰 {country.currency || "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Count */}
        <div className="text-center text-white mt-8">
          Showing {filteredCountries.length} Countries
        </div>
      </div>
    </div>
  );
}

export default Countries;