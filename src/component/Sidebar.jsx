import { Link, useLocation } from "react-router-dom";

function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();

  const menus = [
    {
      name: "Home",
      path: "/",
      icon: "🏠",
    },
    {
      name: "JavaScript Notes",
      path: "/javascript-notes",
      icon: "📚",
    },
    {
      name: "Countries",
      path: "/countries",
      icon: "🌍",
    },
    {
      name: "Indian Places",
      path: "/places",
      icon: "🇮🇳",
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-72
          bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800
          text-white shadow-2xl
          transform transition-transform duration-300

          ${isOpen ? "translate-x-0" : "-translate-x-full"}

          md:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Explorer
              </h1>

              <p className="text-slate-400 text-sm mt-1">Discover The World</p>
            </div>

            <button
              className="md:hidden text-2xl"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>

        {/* User Card */}
        <div className="mx-4 mt-6 p-4 rounded-3xl bg-slate-800 border border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center font-bold">
              SK
            </div>

            <div>
              <h3 className="font-semibold">Sachin Kolhe</h3>

              <p className="text-xs text-slate-400">World Explorer</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 mt-4">
          <ul className="space-y-3">
            {menus.map((menu) => (
              <li key={menu.path}>
                <Link
                  to={menu.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                    location.pathname === menu.path
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg"
                      : "hover:bg-slate-800"
                  }`}
                >
                  <span className="text-2xl">{menu.icon}</span>

                  <span className="font-medium">{menu.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Statistics */}
        <div className="mx-4 mt-8 p-5 rounded-3xl bg-slate-800 border border-slate-700">
          <h3 className="font-bold text-lg mb-4">🌎 Statistics</h3>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-400">Countries</span>

              <span className="font-bold">250+</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Places</span>

              <span className="font-bold">30+</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Capitals</span>

              <span className="font-bold">250+</span>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="absolute bottom-6 left-4 right-4">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-5">
            <h3 className="font-bold text-lg">✈️ Travel More</h3>

            <p className="text-sm text-white/80 mt-2">
              Explore countries, capitals, currencies and beautiful places.
            </p>

            <button className="mt-4 w-full bg-white text-black font-semibold py-2 rounded-xl hover:bg-gray-100 transition">
              Explore Now
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
