import me from "../assets/me.png";
function Navigation() {
  return (
    <div className="z-10 bg-cyan-300 fixed w-3/4 h-dvh -translate-x-full lg:w-3/12 lg:static lg:translate-x-0 xl:w-2/12 xl:static">
      <div className="flex h-1/4">
        <img
          className="h-3/4 w-3/2 m-auto rounded-full"
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
