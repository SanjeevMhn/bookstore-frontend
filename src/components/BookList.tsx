import BookCard from "./BookCard";

export type BookCardType = {
  id: number;
  name: string;
  author: string;
  image: string;
  price: string;
};

type BookListProps = {
  title: string;
  sub_title?: string;
  bookList: Array<BookCardType>;
  link: string;
};

const BookList = ({ title, sub_title, bookList, link }: BookListProps) => {
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
          {bookList.map((item) => (
            <li className="item" key={item.id}>
              <BookCard book={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BookList;
