import { NavLink } from "react-router-dom";
import me from "../assets/me.png";
function Navigation({ isOpen }) {
  return (
    <div
      className={`transition-transform duration-500 z-10 bg-cyan-300 fixed w-2/4 h-dvh ${
        !isOpen ? "-translate-x-full" : ""
      } lg:w-4/12 lg:static lg:translate-x-0 xl:w-2/12 xl:static`}
    >
      <div className="flex h-1/4 p-5">
        <img
          className="h-20 w-20 lg:w-30 lg:h-30 xl:w-40 xl:h-40 m-auto rounded-full"
          src={me}
          alt="my face"
        />
      </div>
      <div className="h-3/4">
        <ul className="list-none">
          <li className="hover:bg-cyan-400">
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-slate-800 block px-5 py-3 text-center"
                  : isActive
                  ? "bg-cyan-400 border-l-4 border-blue-800 text-slate-800 block px-5 py-3 text-center"
                  : "text-slate-800 block px-5 py-3 text-center"
              }
            >
              About
            </NavLink>
          </li>
          <li className="hover:bg-cyan-400">
            <NavLink
              to="/projects"
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-slate-800 block px-5 py-3 text-center"
                  : isActive
                  ? "bg-cyan-400 border-l-4 border-blue-800 text-slate-800 block px-5 py-3 text-center"
                  : "text-slate-800 block px-5 py-3 text-center"
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="hover:bg-cyan-400">
            <NavLink
              to="/tutorials"
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-slate-800 block px-5 py-3 text-center"
                  : isActive
                  ? "bg-cyan-400 border-l-4 border-blue-800 text-slate-800 block px-5 py-3 text-center"
                  : "text-slate-800 block px-5 py-3 text-center"
              }
            >
              Tutorials
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
