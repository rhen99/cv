import { NavLink } from "react-router-dom";
import me from "../assets/me.png";
function Navigation({ isOpen, setIsOpen }) {
  return (
    <div
      className={`transition-transform duration-500 z-10 bg-cyan-300 fixed w-2/4 h-dvh ${
        !isOpen ? "-translate-x-full" : ""
      } lg:w-4/12 lg:static lg:translate-x-0 xl:w-2/12 xl:static`}
    >
      <div className="flex h-1/5">
        <img
          className="h-24 w-24 lg:w-28 lg:h-28 m-auto rounded-full"
          src={me}
          alt="my face"
        />
      </div>
      <h1 className="text-center py-1 font-bold text-xl">Arhen Santiago</h1>
      <p className="text-center text-sm">arhensantiago9900@gmail.com</p>
      <div>
        <ul className="list-none pt-4 lg:pt-2">
          <li className="hover:bg-cyan-400">
            <NavLink
              to="/projects"
              onClick={() => setIsOpen(false)}
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
              onClick={() => setIsOpen(false)}
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
          <li className="hover:bg-cyan-400">
            <NavLink
              onClick={() => setIsOpen(false)}
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
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
