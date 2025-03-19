import { BookCardType } from "./BookList";

type BookCardPropType = {
  book: BookCardType;
};

const BookCard = ({ book }: BookCardPropType) => {
  const placeholderImg = "/placeholder.svg";
  return (
    <div className="inner-container h-full flex flex-col gap-[0.8rem] bg-white">
      {book.inStock !== undefined && !book.inStock ? (
        <div className="out-of-stock">Out of Stock</div>
      ) : null}
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
        className="add-to-cart p-[0.5rem] border border-blue-400 text-blue-400 cursor-pointer mt-auto hover:text-white hover:bg-blue-400"
      >
        {book.inStock !== undefined && !book.inStock ? (
          <>Request Book</>
        ) : (
          <>Add to Cart</>
        )}
      </button>
    </div>
  );
};

export default BookCard;
