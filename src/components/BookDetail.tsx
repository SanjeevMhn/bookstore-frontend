"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { BookCardType } from "./BookList";
import BookCardList from "./BookCardList";
import nextConfig from "../../next.config";
export type BookDetailType = {
  book_title: string;
  book_image: string;
  book_author: string;
  book_seller: string;
  book_description: string;
  book_genres: Array<{ id: number; name: string; route: string }>;
  book_price: string;
  book_pages: string;
  book_weight: string;
  book_isbn: string;
  book_language: string;
  book_inStock?: boolean;
  book_onSale?: {
    sale_percentage: string;
    sale_price: string;
  };
};

type BookDetailPropType = {
  bookDetail: BookDetailType;
};

const BookQuantityDisplay = () => {
  const [bookQuantity, setBookQuantity] = useState<number>(1);
  return (
    <div className="book-quantity inline-flex items-center gap-[1.5rem]">
      <button
        type="button"
        onClick={() =>
          bookQuantity <= 1
            ? setBookQuantity(1)
            : setBookQuantity(bookQuantity - 1)
        }
      >
        <span className="icon-container" style={{ "--size": "2.5rem" } as React.CSSProperties}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </span>
      </button>
      <span className="quantity text-[2.2rem]">Qty: {bookQuantity}</span>
      <button type="button" onClick={() => setBookQuantity(bookQuantity + 1)}>
        <span className="icon-container" style={{ "--size": "2.5rem" } as React.CSSProperties}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
          </svg>
        </span>
      </button>
    </div>
  );
};

const BookDescription = ({ description }: { description: string }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  return (
    <>
      <p className={`book-description ${showMore && "show-more"}`}>
        {description}
      </p>
      <button
        type="button"
        className="mx-auto text-blue-400 text-[1.8rem] cursor-pointer"
        onClick={() => setShowMore(!showMore)}
      >
        Show {!showMore ? "More" : "Less"}
      </button>
    </>
  );
};

const BookDetail = ({ bookDetail }: BookDetailPropType) => {
  let placeholder = `${nextConfig.basePath}/placeholder.svg`;

  const setBookOtherInfo = (
    bookDetail: BookDetailType
  ): Array<{ icon: TrustedHTML; data: string }> => {
    let infoArray: Array<{ icon: TrustedHTML; data: string }> = [];
    Object.keys(bookDetail).map((detail) => {
      if (detail == "book_pages") {
        infoArray.push({
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/></svg>',
          data: `${bookDetail[detail]} pages`,
        });
      }
      if (detail == "book_weight") {
        infoArray.push({
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M224 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm122.5 32c3.5-10 5.5-20.8 5.5-32c0-53-43-96-96-96s-96 43-96 96c0 11.2 1.9 22 5.5 32L120 128c-22 0-41.2 15-46.6 36.4l-72 288c-3.6 14.3-.4 29.5 8.7 41.2S33.2 512 48 512l416 0c14.8 0 28.7-6.8 37.8-18.5s12.3-26.8 8.7-41.2l-72-288C433.2 143 414 128 392 128l-45.5 0z" /></svg>',
          data: bookDetail[detail],
        });
      }
      if (detail == "book_isbn") {
        infoArray.push({
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M24 32C10.7 32 0 42.7 0 56L0 456c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24L64 56c0-13.3-10.7-24-24-24L24 32zm88 0c-8.8 0-16 7.2-16 16l0 416c0 8.8 7.2 16 16 16s16-7.2 16-16l0-416c0-8.8-7.2-16-16-16zm72 0c-13.3 0-24 10.7-24 24l0 400c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-400c0-13.3-10.7-24-24-24l-16 0zm96 0c-13.3 0-24 10.7-24 24l0 400c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-400c0-13.3-10.7-24-24-24l-16 0zM448 56l0 400c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-400c0-13.3-10.7-24-24-24l-16 0c-13.3 0-24 10.7-24 24zm-64-8l0 416c0 8.8 7.2 16 16 16s16-7.2 16-16l0-416c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
              </svg>`,
          data: bookDetail[detail],
        });
      }
      if (detail == "book_language") {
        infoArray.push({
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
              </svg>`,
          data: bookDetail[detail],
        });
      }
    });
    return infoArray;
  };

  const bookOtherInfoList = useMemo(() => {
    return setBookOtherInfo(bookDetail);
  }, [bookDetail]);

  const booksFromAuthor: Array<BookCardType> = [
    {
      id: 1,
      name: "The Three Body Problem",
      author: "Cixin Leu",
      image: "",
      price: "958",
    },
    {
      id: 2,
      name: "The Dark Forest",
      author: "Cixin Leu",
      image: "",
      price: "958",
    },
    {
      id: 3,
      name: "Death's End",
      author: "Cixin Leu",
      image: "",
      price: "958",
    },
    {
      id: 4,
      name: "Animal Farm",
      author: "George Otwell",
      image: "",
      price: "1200",
    },
    {
      id: 5,
      name: "Fight Club",
      author: "John Doe",
      image: "",
      price: "560",
      inStock: false,
    },
  ];

  const booksFromSameCategory: Array<BookCardType> = [
    {
      id: 1,
      name: "The Three Body Problem",
      author: "Cixin Leu",
      image: "",
      price: "958",
    },
    {
      id: 2,
      name: "The Dark Forest",
      author: "Cixin Leu",
      image: "",
      price: "958",
    },
    {
      id: 3,
      name: "Death's End",
      author: "Cixin Leu",
      image: "",
      price: "958",
    },
    {
      id: 4,
      name: "Animal Farm",
      author: "George Otwell",
      image: "",
      price: "1200",
    },
    {
      id: 5,
      name: "Fight Club",
      author: "John Doe",
      image: "",
      price: "560",
      inStock: false,
    },
  ];

  return (
    <section className="book-details flex flex-col gap-[2.5rem]">
      <article className="book-detail-container wrapper flex flex-col lg:flex-row">
        {bookDetail.book_inStock !== undefined && !bookDetail.book_inStock ? (
          <span className="out-of-stock">Out of stock</span>
        ) : null}
        {bookDetail.book_onSale !== undefined ? (
          <span className="discount">
            {bookDetail.book_onSale.sale_percentage}%&nbsp;off
          </span>
        ) : null}
        <div className="book-cover flex flex-col items-center lg:items-start gap-[1.5rem]">
          <div className="img-container" style={{ "--size": "22rem" } as React.CSSProperties}>
            {bookDetail.book_image !== "" &&
            bookDetail.book_image !== undefined ? (
              <img src={bookDetail.book_image} alt="Book Cover Image" />
            ) : (
              <img src={placeholder} alt="Book Cover Image" />
            )}
          </div>
          <ul className="book-genre-list flex flex-wrap gap-[0.6rem]">
            <li className="item p-[0.2rem_0.5rem] text-[1.7rem] font-semibold">
              Geners:
            </li>
            {bookDetail.book_genres.map((genre) => (
              <li
                className="item p-[0.2rem_0.5rem] rounded-xl bg-white border border-blue-400"
                key={genre.id}
              >
                <Link
                  href={`/books/genres/${genre.route}`}
                  className="text-blue-400"
                >
                  {genre.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="book-detail">
          <h2 className="book-title">{bookDetail.book_title}</h2>
          <p className="book-author">by {bookDetail.book_author}</p>
          <div className="book-seller">
            sold by &nbsp;
            <Link href={"/"} className="text-[2rem] text-blue-500">
              {bookDetail.book_seller}
            </Link>
          </div>
          <BookDescription description={bookDetail.book_description} />
          {bookDetail.book_onSale !== undefined ? (
            <div className="book-price-group flex item-center gap-4">
              <s className="text-[2rem] text-gray-500 flex items-end">
                Rs.{bookDetail.book_price}
              </s>
              <p className="book-price text-[2.2rem]">
                Rs.{bookDetail.book_onSale.sale_price}
              </p>
            </div>
          ) : (
            <p className="book-price text-[2.2rem]">
              Rs.{bookDetail.book_price}
            </p>
          )}
          {bookDetail.book_inStock !== undefined &&
          !bookDetail.book_inStock ? null : (
            <BookQuantityDisplay />
          )}
          <div className="book-actions flex gap-[1.5rem]">
            {bookDetail.book_inStock !== undefined &&
            !bookDetail.book_inStock ? (
              <>
                <button
                  type="button"
                  className="cursor-pointer bg-red-900 text-white p-[0.5rem_1rem] text-[1.7rem]"
                >
                  Get Restock Alert
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="cursor-pointer border border-blue-400 bg-blue-400 text-white p-[0.5rem_1rem] text-[1.7rem]"
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="cursor-pointer border border-blue-400 bg-white text-blue-400 p-[0.5rem_1rem] text-[1.7rem]"
                >
                  Wishlist
                </button>
              </>
            )}
          </div>
        </div>
        <div className="book-add-info">
          <h2 className="title-text">Book Info</h2>
          <ul className="info-list flex flex-col gap-[1.2rem]">
            {bookOtherInfoList.map((info, index) => (
              <li className="info-item flex gap-5 items-center" key={index}>
                <span
                  className="icon-container"
                  style={{ "--size": "2.2rem" } as React.CSSProperties}
                  dangerouslySetInnerHTML={{ __html: info.icon }}
                ></span>
                <span className="label-text text-[1.7rem]">{info.data}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <article className="books-from-author bg-blue-100 py-[3rem]">
        <div className="wrapper">
          <header className="title-section pb-5 grid grid-cols-4 gap-2">
            <h2 className="header-text col-1 row-1 whitespace-nowrap">More by</h2>
            <p className="secondary-text col-1 row-2">Cixin Leu</p>
            <Link
              href={"/books/genres/science-fiction"}
              className="col-[1/-1] row-[1/span_2] flex items-center justify-end text-[1.8rem]"
            >
              View all
            </Link>
          </header>

          <BookCardList bookList={booksFromAuthor} inverse={true} />
        </div>
      </article>

      <article className="similar-books pb-[3rem]">
        <div className="wrapper">
          <header className="title-section pb-5 grid grid-cols-4 gap-2">
            <h2 className="header-text col-1 row-1 whitespace-nowrap">See Similar Books</h2>
            <p className="secondary-text pb-5 col-1 row-2 whitespace-nowrap">Science Fiction</p>
            <Link
              href={"/books/genres/science-fiction"}
              className="col-[1/-1] row-[1/span_2] flex justify-end items-center text-[1.8rem]"
            >
              View all
            </Link>
          </header>

          <BookCardList bookList={booksFromSameCategory} />
        </div>
      </article>
    </section>
  );
};

export default BookDetail;
