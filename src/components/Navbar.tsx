import Link from "next/link";
import Categories from "./Categories";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="wrapper flex items-center gap-[10rem] category-dropdown">
        <Link href="/" className="brand-name text-5xl font-bold">
          bookstore
        </Link>
        <div className="menu-container w-full">
          <div className="label rotate-icon flex items-center gap-2">
            <span className="label-text">Books</span>
            <span className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </span>
          </div>
          <a href="/" className="label label-text">
            Deals
          </a>
          <div className="label ml-auto">
            <div className="search-container flex items-center gap-2 bg-gray-200 p-[0.5rem_1.2rem] rounded-xl cursor-pointer">
              <span className="icon-container" style={{ "--size": "2rem" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="fill-blue-600"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </span>
              <span className="info-text label-text text-gray-400">
                What do you want to read?
              </span>
              <span className="keyboard-info text-[1.4rem] text-black font-medium p-[0.2rem_1rem] border-gray-400 border rounded-md">
                Ctrl + K
              </span>
            </div>
          </div>
          <a
            href=""
            className="label label-text icon-container cart"
            style={{ "--size": "2.4rem" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
            <span className="cart-items">0</span>
          </a>
          <a href="/" className="label label-text">
            Login
          </a>
        </div>
        <div className="category-dropdown-item">
          <Categories />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
