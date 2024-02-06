import { Outlet } from "react-router-dom";
function Main({ setIsOpen, isOpen }) {
  return (
    <div className="w-full">
      <div className="text-right px-7 py-4">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="border-2 border-slate-950 px-3 py-0.5 lg:hidden"
          >
            Nav
          </button>
        ) : (
          <button
            onClick={() => setIsOpen(false)}
            className="border-2  border-rose-500 text-rose-500 px-3 py-0.5 lg:hidden"
          >
            Close
          </button>
        )}
      </div>
      <Outlet />
    </div>
  );
}

export default Main;
