import { NavLink, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 text-center py-4 shadow-md">
        <NavLink to="/">
          <h1 className="text-3xl font-bold tracking-wide uppercase">
            Classic Bro
          </h1>
        </NavLink>
      </header>
      <main className="flex-1 p-6 bg-gray-900">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-center py-3 text-sm text-gray-400">
        © {new Date().getFullYear()} Classic Bro. All rights reserved.
      </footer>
    </div>
  );
}

export default AppLayout;
