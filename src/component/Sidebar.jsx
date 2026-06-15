import { Link, useLocation } from "react-router-dom";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();

  const menus = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "Countries", path: "/countries", icon: "🌍" },
    { name: "Indian Places", path: "/places", icon: "🇮🇳" },
  ];

  return (
    <>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-72 bg-slate-900 text-white
          transform transition-transform duration-300

          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

          md:translate-x-0
        `}
      >
        <div className="p-6 border-b border-slate-700 flex justify-between">
          <h1 className="text-2xl font-bold">
            🌍 Explorer
          </h1>

          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-3">
            {menus.map((menu) => (
              <li key={menu.path}>
                <Link
                  to={menu.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 p-4 rounded-xl transition ${
                    location.pathname === menu.path
                      ? "bg-purple-600"
                      : "hover:bg-slate-800"
                  }`}
                >
                  <span>{menu.icon}</span>
                  <span>{menu.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;