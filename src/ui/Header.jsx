import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className=" flex items-center justify-between bg-yellow-500 uppercase px-4 py-3 border-b border-stone-200 sm:px-6 font-sans">
      <Link to="/" className="tracking-widest">Fast React Pizza Co.</Link>
      <SearchOrder />

      <Username></Username>
    </header>
  );
}

export default Header;
