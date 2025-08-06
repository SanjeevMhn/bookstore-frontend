import Link from "next/link";
import React from "react";

type FooterItems = {
  id: number;
  name: string;
  link?: string;
  subItems?: Array<FooterItems>;
};
const Footer = () => {
  const footerItems: Array<FooterItems> = [
    {
      id: 1,
      name: "Quick Links",
      subItems: [
        {
          id: 101,
          name: "Book Request",
          link: "/book-request",
        },
        {
          id: 102,
          name: "Best Sellers",
          link: "/best-sellers",
        },
        {
          id: 103,
          name: "New Arrivals",
          link: "/new-arrivals",
        },
        {
          id: 104,
          name: "Blogs",
          link: "/blogs",
        },
        {
          id: 105,
          name: "Used Books",
          link: "/used-books",
        },
      ],
    },
    {
      id: 2,
      name: "About",
      subItems: [
        {
          id: 201,
          name: "About Us",
          link: "/about-us",
        },
        {
          id: 202,
          name: "Careers",
          link: "/careers",
        },
        {
          id: 203,
          name: "Contact Us",
          link: "/contact-us",
        },
        {
          id: 204,
          name: "Wholesale",
          link: "/wholesale",
        },
      ],
    },
    {
      id: 3,
      name: "Others",
      subItems: [
        {
          id: 301,
          name: "FAQ's",
          link: "/faqs",
        },
        {
          id: 302,
          name: "Shipping Rates",
          link: "/shipping-rates",
        },
      ],
    },
  ];
  return (
    <footer className="main-footer">
      <div className="wrapper py-[5rem] flex flex-col lg:flex-row gap-[5rem]">
        <div className="brand-details flex flex-col gap-[2rem] min-w-[30rem]">
          <h2 className="text-[3.2rem] font-semibold">bookstore</h2>
          <p className="text-[1.8rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem
            unde ut enim pariatur esse sed molestias ducimus minus fugit
          </p>
          <ul className="social-links flex item-center gap-[1.5rem]">
            <li className="link icon-container cursor-pointer" style={{ "--size": "2.5rem" } as React.CSSProperties}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
              </svg>
            </li>
            <li className="link icon-container cursor-pointer" style={{ "--size": "2.5rem" } as React.CSSProperties}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </li>
            <li className="link icon-container cursor-pointer" style={{ "--size": "2.5rem" } as React.CSSProperties}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
              </svg>
            </li>
          </ul>
        </div>
        <ul className="footer-item-list flex justify-between w-full">
          {footerItems.map((item) => {
            if (item.hasOwnProperty("subItems")) {
              return (
                <li className="item flex flex-col gap-[1.2rem]" key={item.id}>
                  <header className="label-text text-[2rem]!">
                    {item.name}
                  </header>
                  <ul className="sub-list flex flex-col gap-5 text-gray-500 ">
                    {item.subItems?.map((sub) => (
                      <li className="item" key={sub.id}>
                        <a href={sub.link} className="flex">
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
            return (
              <li className="item" key={item.id}>
                <a href={item.link} className="flex">
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
        
        <div className="newsletter-section">
            <h2 className="text-[2rem] font-bold">Subscribe to our newsletter</h2>
            <p className="text-[1.6rem] text-gray-600 pb-8">Get notified on new arrivals, discount offers and many more.</p>
            <form  className="email-form flex flex-wrap">
                <div className="form-group">
                    <input type="email" name="" id="" className="form-control border border-gray-400 p-[0.5rem_1rem] text-[1.7rem]" placeholder="Email" />
                </div>
                <div className="form-group flex items-center justify-center bg-blue-500 text-white p-[0.5rem_1rem]">
                    <button type="button" className="submit-btn h-full w-full cursor-pointer">Subscribe</button>
                </div>
            </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
