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
      country.name.toLowerCase().includes(search.toLowerCase()),
    );

    setFilteredCountries(filtered);
  }, [search, countries]);

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/info?returns=flag,unicodeFlag,currency,capital",
      );

      const result = await response.json();

      const sorted = result.data.sort((a, b) => a.name.localeCompare(b.name));

      setCountries(sorted);
      setFilteredCountries(sorted);
    } catch (error) {
      console.error("Failed to fetch countries:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading Countries...</h2>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-white mb-8">
          🌍 Countries Explorer
        </h1>

        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search Country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-lg px-5 py-4 rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-4 focus:ring-pink-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {filteredCountries.map((country, index) => (
            <div
              key={`${country.name}-${index}`}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-xl hover:scale-100 hover:shadow-pink-500/30 transition-all duration-300"
            >
              {country.flag && (
                <div className="overflow-hidden">
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="w-full h-52 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="p-5">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {country.unicodeFlag} {country.name}
                </h2>

                <div className="space-y-3">
                  <div className="flex justify-between bg-white/10 rounded-lg p-3">
                    <span className="text-gray-200">Capital</span>
                    <span className="font-semibold text-white">
                      {country.capital || "N/A"}
                    </span>
                  </div>

                  <div className="flex justify-between bg-white/10 rounded-lg p-3">
                    <span className="text-gray-200">Currency</span>
                    <span className="font-semibold text-white">
                      {country.currency || "N/A"}
                    </span>
                  </div>
                </div>

                <button className="w-full mt-5 bg-gradient-to-r from-pink-500 to-violet-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Countries;
