import BookCard from "@/components/BookCard";
import { BookCardType } from "@/components/BookList";
import Categories from "@/components/Categories";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let { slug } = await params;
  let route = slug;
  slug = slug.split("-").join(" ");
  const bookList: Array<BookCardType> = [
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
    },
    {
      id: 6,
      name: "Rich Dad, Poor Dad",
      author: "John Doe",
      image: "",
      price: "450",
    },
    {
      id: 7,
      name: "Never Give Up",
      author: "David Goggins",
      image: "",
      price: "500",
    },
    {
      id: 8,
      name: "Two States",
      author: "Karan Bhatiya",
      image: "",
      price: "350",
    },
    {
      id: 9,
      name: "Harry Potter",
      author: "Lindsey Lohan",
      image: "",
      price: "1200",
    },
    {
      id: 10,
      name: "The American Psycho",
      author: "Amanda Nunez",
      image: "",
      price: "860",
      inStock: false,
    },
  ];
  return (
    <div className="wrapper p-[3rem_0]">
      <div className="genre-section">
        <aside className="side-section">
          <Categories activeCategory={route} />
        </aside>
        <main className="genres-books-list">
          <header className="header-section flex items-center justify-between">
            <h2 className="genre-name text-[2rem] font-semibold capitalize">
              {slug}
            </h2>
            <form className="search-genre">
              <input
                type="text"
                name=""
                id=""
                className="form-control border border-gray-400 rounded-md p-[0.5rem_3.5rem_0.5rem_1rem] text-[1.8rem]"
                placeholder={`Search on ${slug}`}
              />
              <span className="icon-container" style={{ "--size": "2rem" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="fill-blue-600"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </span>
            </form>
          </header>
          <ul className="book-list small">
            {bookList.map((item) => (
              <li
                className={`item ${
                  item.inStock !== undefined
                    ? !item.inStock
                      ? "inverse"
                      : ""
                    : ""
                }`}
                key={item.id}
              >
                <BookCard book={item} />
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}
