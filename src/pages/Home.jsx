function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-extrabold mb-6">
          🌍 World Explorer
        </h1>

        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Discover countries, capitals, currencies, national flags,
          and explore the most beautiful tourist destinations across India.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button className="px-8 py-4 bg-pink-500 rounded-2xl font-semibold hover:bg-pink-600 transition">
            Explore Countries
          </button>

          <button className="px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-gray-200 transition">
            Discover India
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 text-center">
            <h2 className="text-4xl font-bold">250+</h2>
            <p className="text-gray-300 mt-2">Countries</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 text-center">
            <h2 className="text-4xl font-bold">250+</h2>
            <p className="text-gray-300 mt-2">Capitals</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 text-center">
            <h2 className="text-4xl font-bold">150+</h2>
            <p className="text-gray-300 mt-2">Currencies</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 text-center">
            <h2 className="text-4xl font-bold">100+</h2>
            <p className="text-gray-300 mt-2">Tourist Places</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold text-center mb-12">
          ✨ Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
            <div className="text-5xl mb-4">🌎</div>
            <h3 className="text-2xl font-bold mb-3">
              Explore Countries
            </h3>
            <p className="text-gray-300">
              Search and discover countries with their flags,
              capitals, and currencies from around the world.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
            <div className="text-5xl mb-4">🇮🇳</div>
            <h3 className="text-2xl font-bold mb-3">
              Discover India
            </h3>
            <p className="text-gray-300">
              Visit famous destinations like Taj Mahal,
              Gateway of India, India Gate, Jaipur, Goa,
              Kerala, and many more.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-3">
              Fast & Interactive
            </h3>
            <p className="text-gray-300">
              Modern React application with beautiful UI,
              quick search, responsive design, and smooth
              user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          🔥 Popular Destinations
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white/10 rounded-3xl p-6 text-center">
            <div className="text-5xl mb-4">🕌</div>
            <h3 className="font-bold text-xl">Taj Mahal</h3>
            <p className="text-gray-300">Agra</p>
          </div>

          <div className="bg-white/10 rounded-3xl p-6 text-center">
            <div className="text-5xl mb-4">🏖️</div>
            <h3 className="font-bold text-xl">Goa Beaches</h3>
            <p className="text-gray-300">Goa</p>
          </div>

          <div className="bg-white/10 rounded-3xl p-6 text-center">
            <div className="text-5xl mb-4">🏰</div>
            <h3 className="font-bold text-xl">Jaipur Forts</h3>
            <p className="text-gray-300">Rajasthan</p>
          </div>

          <div className="bg-white/10 rounded-3xl p-6 text-center">
            <div className="text-5xl mb-4">⛰️</div>
            <h3 className="font-bold text-xl">Leh Ladakh</h3>
            <p className="text-gray-300">Ladakh</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-white/10">
        <p className="text-gray-400">
          🌍 World Explorer • Built with React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

export default Home;