import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b-4 border-slate-400 bg-blue-600 px-4 py-3 uppercase text-slate-200 sm:px-6">
      <Link to="/" className="font-bold tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
