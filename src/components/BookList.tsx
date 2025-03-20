import BookCard from "./BookCard";
import BookCardList from "./BookCardList";

export type BookCardType = {
  id: number;
  name: string;
  author: string;
  image: string;
  price: string;
  inStock?: boolean;
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
        <header className="flex justify-between items-center pb-[2rem]">
          <div className="title-section">
            <h2 className="header-text">{title}</h2>
            {sub_title && <p className="secondary-text">{sub_title}</p>}
          </div>
          <a href={link} className="header-link">
            Show All
          </a>
        </header>
        <BookCardList bookList={bookList} />
      </div>
    </section>
  );
};

export default BookList;
