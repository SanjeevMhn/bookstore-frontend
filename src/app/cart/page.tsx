import Link from "next/link";
import React from "react";

export default async function Page() {
  return (
    <div className="cart-container my-auto py-[5rem]">
      <div className="wrapper flex flex-col-reverse gap-[2rem] justify-between items-center">
        <div className="info-text text-center">
          <h2 className="text-[3.2rem]">Your Cart is Empty!</h2>
          <p className="text-[1.8rem] pb-[1.5rem]">
            Explore our collection of books from various genres and add them
            here before making your purchase.
          </p>
          <p className="text-[2.5rem]">Some Helpful links:</p>
          <ul className="link-list inline-flex flex-col text-left pt-[1rem]">
            <li>
              <Link href={"/"} className="text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/books/new-arrivals"} className="text-blue-500">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link href={"/books/best-sellers"} className="text-blue-500">
                Best Sellers
              </Link>
            </li>
          </ul>
        </div>
        <div className="icon-container bg-blue-300 circle-shadow p-[1rem]" style={{ "--size": "20rem" } as React.CSSProperties}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
