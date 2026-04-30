import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const placeholderByPath = {
  "/projects": "Search projects..."
};

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const initials = user?.name
    ?.split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-slate-200 bg-white/95 px-6 py-4 shadow-sm backdrop-blur-xl text-slate-700">
      <div className="flex items-center gap-6">
        <div className="rounded-2xl bg-primary-container px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-on-primary shadow-sm">
          TaskFlow
        </div>
        <div className="hidden w-96 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 shadow-sm md:flex">
          <span className="material-symbols-outlined text-slate-400">search</span>
          <input
            className="w-full border-none bg-transparent text-body-md text-slate-800 focus:ring-0"
            placeholder={placeholderByPath[location.pathname] || "Search tasks..."}
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="rounded-2xl border border-slate-200 bg-slate-50 p-2 text-slate-600 transition hover:bg-slate-100" type="button" aria-label="Notifications">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="rounded-2xl border border-slate-200 bg-slate-50 p-2 text-slate-600 transition hover:bg-slate-100" type="button" aria-label="Help">
          <span className="material-symbols-outlined">help</span>
        </button>
        <div className="relative">
          <button
            className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-primary text-sm font-bold text-white shadow-sm transition hover:brightness-110"
            type="button"
            title={user?.email}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {initials || "TF"}
          </button>
          <div className={`absolute right-0 mt-2 w-52 rounded-3xl border border-slate-200 bg-white shadow-xl ${dropdownOpen ? "block" : "hidden"}`}>
            <div className="border-b border-slate-200 px-4 py-4">
              <p className="text-sm font-semibold text-slate-900">{user?.name}</p>
              <p className="mt-1 text-xs text-slate-500">{user?.email}</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">{user?.role}</p>
            </div>
            <button
              className="flex w-full items-center gap-2 px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50"
              type="button"
              onClick={handleLogout}
            >
              <span className="material-symbols-outlined text-sm">logout</span>
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
