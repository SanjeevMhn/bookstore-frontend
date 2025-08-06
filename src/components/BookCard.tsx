import nextConfig from "../../next.config";
import { BookCardType } from "./BookList";


type BookCardPropType = {
  book: BookCardType;
};


const BookCard = ({ book }: BookCardPropType) => {
  const placeholderImg = `/placeholder.svg`;
  return (
    <div className="inner-container h-full flex flex-col gap-[0.8rem] bg-white">
      {book.inStock !== undefined && !book.inStock ? (
        <div className="out-of-stock">Out of Stock</div>
      ) : null}

      {book.onSale !== undefined ? (
        <div className="discount">{book.onSale.sale_percentage}% off</div>
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
        <p className="book-price">
          {book.onSale !== undefined ? (
            <span className=" text-[1.8rem]">
              <s className="text-gray-500 pr-[0.5rem]">Rs.{book.price}</s>
              <span className="discounted-price">
                Rs.{book.onSale.sale_price}
              </span>
            </span>
          ) : (
            <span className="text-[2rem]">Rs.{book.price}</span>
          )}
        </p>
      </div>
      <button
        type="button"
        className="add-to-cart p-[0.5rem] border border-blue-400 text-blue-400 cursor-pointer mt-auto hover:text-white hover:bg-blue-400"
      >
        {book.inStock !== undefined && !book.inStock ? (
          <>Restock Alert</>
        ) : (
          <>Add to Cart</>
        )}
      </button>
    </div>
  );
};

export default BookCard;
