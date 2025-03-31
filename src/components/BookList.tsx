import BookCard from "./BookCard";
import BookCardList from "./BookCardList";

export type BookCardType = {
  id: number;
  name: string;
  author: string;
  image: string;
  price: string;
  inStock?: boolean;
  onSale?:{
    sale_percentage: string;
    sale_price: string;
  }
};

type BookListProps = {
  title: string;
  sub_title?: string;
  bookList: Array<BookCardType>;
  link: string;
  inverse?: boolean
};

const BookList = ({ title, sub_title, bookList, link, inverse }: BookListProps) => {
  return (
    <section className={`book-list-section ${inverse !== undefined && inverse ? 'bg-blue-100' : ''}`}>
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
        <BookCardList bookList={bookList} inverse={inverse !== undefined ? inverse : undefined} />
      </div>
    </section>
  );
};

export default BookList;
