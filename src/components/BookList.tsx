export type BookCard = {
  id: number;
  name: string;
  author: string;
  image: string;
  price: string;
};

type BookListProps = {
  title: string;
  sub_title?: string;
  bookList: Array<BookCard>;
  link: string;
};

const BookList = ({ title, sub_title, bookList, link }: BookListProps) => {
  const placeholderImg = "/placeholder.svg";
  return (
    <section className="book-list-section">
      <div className="wrapper p-[5rem_0]">
        <header className="flex justify-between items-center">
          <div className="title-section">
            <h2 className="header-text">{title}</h2>
            {sub_title && <p className="secondary-text">{sub_title}</p>}
          </div>
          <a href={link} className="header-link">
            Show All
          </a>
        </header>
        <ul className="book-list pt-8 flex">
          {bookList.map((book) => (
            <li className="item p-[1.2rem]" key={book.id}>
              <div className="inner-container flex flex-col gap-[0.8rem] rounded-md bg-white">
                <div className="img-container mx-auto">
                  {book.image !== "" ? (
                    <img src={book.image} />
                  ) : (
                    <img src={placeholderImg} />
                  )}
                </div>
                <div className="px-[1rem]">
                  <h2 className="book-title text-[1.8rem]">{book.name}</h2>
                  <p className="book-author text-[1.7rem]">by {book.author}</p>
                  <p className="book-price text-[2rem]">Rs.{book.price}</p>
                </div>
                  <button
                    type="button"
                    className="add-to-cart mt-5 p-[0.5rem] border border-blue-400 text-blue-400 cursor-pointer hover:text-white hover:bg-blue-400"
                  >
                    Add to Cart
                  </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BookList;
