import BookList, { BookCard } from "@/components/BookList";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  const newArrivalBookList: Array<BookCard> = [
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
  ];
  const bestSellersBookList: Array<BookCard> = [
    {
      id: 1,
      name: "Rich Dad, Poor Dad",
      author: "John Doe",
      image: "",
      price: "450",
    },
    {
      id: 2,
      name: "Never Give Up",
      author: "David Goggins",
      image: "",
      price: "500",
    },
    {
      id: 3,
      name: "Two States",
      author: "Karan Bhatiya",
      image: "",
      price: "350",
    },
    {
      id: 4,
      name: "Harry Potter",
      author: "Lindsey Lohan",
      image: "",
      price: "1200",
    },
    {
      id: 5,
      name: "The American Psycho",
      author: "Amanda Nunez",
      image: "",
      price: "860",
    },
  ];
  return (
    <main className="flex flex-col h-full isolate">
      <Navbar />
      <Hero />
      <BookList
        title="Best Sellers"
        sub_title="Find your next read amoung our best sellers"
        link="/best-sellers"
        bookList={bestSellersBookList}
      />
      <BookList
        title="New Arrivals"
        sub_title="Explore the latest arrivals and find your new read."
        link="/new-arrivals"
        bookList={newArrivalBookList}
      />
      <Footer />
    </main>
  );
}
