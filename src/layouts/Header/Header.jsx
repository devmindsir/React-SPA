import { Link } from "react-router-dom";
import Navbar from "../../components/header/Navbar";
import Button from "../../components/ui/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
function Header() {
  const { cartItems } = useContext(CartContext);
  const { user, logOut } = useContext(UserContext);
  return (
    <>
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold text-blue-600">DevLearn</h1>
        </Link>
        <Navbar />

        <div className="flex items-center gap-4">
          {/* سبد خرید */}
          <Link to={"/cart"}>
            <button className="relative">
              <AiOutlineShoppingCart className="w-6 h-6" />

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            </button>
          </Link>
          {/* دکمه‌ها */}
          {user ? (
            <>
              <Link to={"/dashboard"}>
                <p className="text-sm text-gray-700 ">سلام , {user.name}</p>
              </Link>
              <button
                onClick={logOut}
                className="text-sm px-4 py-2 rounded bg-red-500 text-white hover:bg-red-700 cursor-pointer">
                خروج
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button className="btn-outline-primary">ورود</Button>
              </Link>
              <Link to="/register">
                <Button className="btn-primary">ثبت‌نام</Button>
              </Link>
            </>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
