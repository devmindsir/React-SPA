import { Link } from "react-router-dom";
import Navbar from "../../components/header/Navbar";
import Button from "../../components/ui/Button";

function Header() {
  return (
    <>
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold text-blue-600">DevLearn</h1>
        </Link>
        <Navbar />

        <div className="flex items-center gap-4">
          {/* سبد خرید */}
          <button className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              ۳
            </span>
          </button>

          {/* دکمه‌ها */}
          <Link to="/login">
            <Button className="btn-outline-primary">ورود</Button>
          </Link>
          <Link to="/register">
            <Button className="btn-primary">ثبت‌نام</Button>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
