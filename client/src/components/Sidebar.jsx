import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const links = [
  { to: "/", label: "Dashboard", icon: "dashboard", end: true },
  { to: "/projects", label: "Projects", icon: "folder_shared" }
];

export default function Sidebar() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-72 flex-col border-r border-slate-200 bg-white/95 pb-4 pt-16 shadow-xl text-sm font-medium tracking-tight text-indigo-900 backdrop-blur-xl">
      <div className="flex items-center gap-3 px-6 py-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-primary text-sm font-black text-white shadow-sm">TF</div>
        <div>
          <h3 className="text-sm font-black leading-tight text-indigo-900">{user?.name || "TaskFlow User"}</h3>
          <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">{user?.role || "member"}</p>
        </div>
      </div>
      <nav className="mt-4 flex-1 space-y-2 px-3">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-3xl px-4 py-3 transition ${
                isActive
                  ? "border-l-4 border-primary bg-primary/10 text-primary"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`
            }
          >
            <span className="material-symbols-outlined">{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </nav>
      <div className="px-6 py-4">
        <button
          className="flex w-full items-center justify-center gap-2 rounded-3xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-container"
          type="button"
          onClick={() => navigate("/projects")}
        >
          <span className="material-symbols-outlined text-sm">add</span>
          New Project
        </button>
      </div>
      <div className="mt-auto space-y-2 px-3">
        <button className="flex w-full items-center gap-3 rounded-3xl px-4 py-3 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900" type="button">
          <span className="material-symbols-outlined">contact_support</span>
          Support
        </button>
        <button
          className="flex w-full items-center gap-3 rounded-3xl px-4 py-3 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          type="button"
          onClick={handleLogout}
        >
          <span className="material-symbols-outlined">logout</span>
          Logout
        </button>
      </div>
    </aside>
  );
}
