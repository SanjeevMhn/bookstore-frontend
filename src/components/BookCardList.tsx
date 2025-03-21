import Link from "next/link";
import { BookCardType } from "./BookList";
import BookCard from "./BookCard";

type BookCardListPropsType = {
  bookList: Array<BookCardType>;
  inverse?: boolean;
};
const BookCardList = ({ bookList, inverse }: BookCardListPropsType) => {
  return (
    <ul className="book-list">
      {bookList.map((item) => (
        <li
          className={`item 
            ${
              item.inStock !== undefined ? (!item.inStock ? "inverse" : "") : ""
            } 
            ${inverse !== undefined && inverse ? "inverse" : ""}
          `}
          key={item.id}
        >
          <Link href={`/books/${item.name}`}>
            <BookCard book={item} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BookCardList;
