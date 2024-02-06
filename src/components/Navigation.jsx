import me from "../assets/me.png";
function Navigation({ isOpen }) {
  return (
    <div
      className={`transition-transform duration-500 z-10 bg-cyan-300 fixed w-2/4 h-dvh ${
        !isOpen ? "-translate-x-full" : ""
      } lg:w-4/12 lg:static lg:translate-x-0 xl:w-2/12 xl:static`}
    >
      <div className="flex h-1/3 p-3">
        <img
          className="h-28 w-28 lg:w-40 lg:h-40 m-auto rounded-full"
          src={me}
          alt="my face"
        />
      </div>
      <div className="h-3/4">
        <ul className="list-none">
          <li className="hover:bg-cyan-400">
            <a href="#" className="block px-5 py-3 text-center">
              About
            </a>
          </li>
          <li className="hover:bg-cyan-400">
            <a href="#" className="block px-5 py-3 text-center">
              Projects
            </a>
          </li>
          <li className="hover:bg-cyan-400">
            <a href="#" className="block px-5 py-3 text-center">
              Tutorials
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
