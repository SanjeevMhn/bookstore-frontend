import BookDetail, { BookDetailType } from "@/components/BookDetail";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let { slug } = await params;
  slug = slug
    .split("%20")
    .filter((sl) => sl !== "%20")
    .join(" ");

  let bookDetail: BookDetailType = {
    book_title: "The Three Body Problem",
    book_author: "Cixin Leu",
    book_seller: "BookStore",
    book_image: "",
    book_description: `istinctio dolore error tempora exercitationem similique molestias
          cupiditate eligendi est mollitia illum fugit assumenda consectetur
          quos nemo, enim hic illo nam?`,
    book_price: "980",
    book_genres: [
      {
        id: 1,
        name: "Science Fiction",
        route: "science-fiction",
      },
      {
        id: 2,
        name: "Romance",
        route: "romance",
      },
      {
        id: 3,
        name: "Adventure",
        route: "adventure",
      },
      {
        id: 4,
        name: "fantasy",
        route: "fantasy",
      },
      {
        id: 5,
        name: 'Young Adult',
        route: 'young-adult'
      }
    ],
    book_pages: '550',
    book_weight: "250g",
    book_isbn: "152878910925",
    book_language: "English",
    book_inStock: true
  };

  return (
    <div className="wrapper p-[3rem_0]">
      <ul className="breadcrumbs pb-[2rem]">
        <li className="breadcrumb-item">Home</li>
        <li className="breadcrumb-item">Action and Adventure</li>
        <li className="breadcrumb-item">{slug}</li>
      </ul>
      <BookDetail bookDetail={bookDetail} />
    </div>
  );
}
