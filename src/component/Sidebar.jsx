import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menus = [
    {
      name: "Home",
      path: "/",
      icon: "🏠",
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
    <aside className="fixed left-0 top-0 h-screen w-72 bg-slate-900 text-white shadow-2xl">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          🌍 Explorer
        </h1>

        <p className="text-sm text-slate-400 mt-2">
          Discover the World
        </p>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-3">
          {menus.map((menu) => (
            <li key={menu.path}>
              <Link
                to={menu.path}
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                  location.pathname === menu.path
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                    : "hover:bg-slate-800 text-slate-300"
                }`}
              >
                <span className="text-2xl">
                  {menu.icon}
                </span>

                <span className="font-medium">
                  {menu.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Card */}
      <div className="absolute bottom-6 left-4 right-4">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-5">
          <h3 className="font-bold text-lg">
            🌎 Explore More
          </h3>

          <p className="text-sm text-white/80 mt-2">
            Discover countries, capitals,
            currencies and famous places.
          </p>

          <button className="mt-4 w-full bg-white text-black font-semibold py-2 rounded-xl hover:bg-gray-100 transition">
            Start Exploring
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;