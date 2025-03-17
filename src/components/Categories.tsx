"use client";
import { useState } from "react";

export type Category = {
  id: number;
  name: string;
  level: number;
  sub_category?: Array<Category>;
};
const Categories = () => {
  const [categories, setCategories] = useState<Array<Category>>([
    {
      id: 1,
      name: "Fiction",
      level: 0,
      sub_category: [
        {
          id: 11,
          name: "Literary Fiction",
          level: 1,
        },
        {
          id: 12,
          name: "Historical Fiction",
          level: 1,
        },
        {
          id: 13,
          name: "Mystery/Thriller/Crime",
          level: 1,
        },
        {
          id: 14,
          name: "Romance",
          level: 1,
        },
        {
          id: 15,
          name: "Science Fiction / Fantasy",
          level: 1,
        },
        {
          id: 16,
          name: "Horror",
          level: 1,
        },
        {
          id: 17,
          name: "Adventure",
          level: 1,
        },
      ],
    },
    {
      id: 2,
      name: "Non Fiction",
      level: 0,
      sub_category: [
        {
          id: 21,
          name: "Biography/Autobiography/Memoir",
          level: 1,
        },
        {
          id: 22,
          name: "Self-Help",
          level: 1,
        },
        {
          id: 23,
          name: "Health & Wellness",
          level: 1,
        },
        {
          id: 24,
          name: "Cooking / Food",
          level: 1,
        },
        {
          id: 24,
          name: "Travel",
          level: 1,
        },
        {
          id: 25,
          name: "History",
          level: 1,
        },
        {
          id: 26,
          name: "Politics",
          level: 1,
        },
        {
          id: 27,
          name: "True Crime",
          level: 1,
        },
        {
          id: 28,
          name: "Psychology",
          level: 1,
        },
        {
          id: 29,
          name: "Philosophy",
          level: 1,
        },
      ],
    },
    {
      id: 3,
      name: "Children's Book",
      level: 0,
      sub_category: [
        {
          id: 31,
          name: "Picture Books",
          level: 1,
        },
        {
          id: 32,
          name: "Coloring Books",
          level: 1,
        },
        {
          id: 33,
          name: "Young Adult",
          level: 1,
        },
      ],
    },
    {
      id: 4,
      name: "Poetry",
      level: 0,
    },
    {
      id: 5,
      name: "Graphic Novels/Comics",
      level: 0,
    },
    {
      id: 6,
      name: "Art & Photography",
      level: 0,
    },
    {
      id: 7,
      name: "Science & Nature",
      level: 0,
    },
    {
      id: 8,
      name: "Business & Finance",
      level: 0,
    },
    {
      id: 9,
      name: "Religion & Spirituality",
      level: 0,
    },
    {
      id: 10,
      name: "Sports & Outdoors",
      level: 0,
    },
    {
      id: 11,
      name: "Reference",
      level: 0,
      sub_category: [
        {
          id: 111,
          name: "Dictionaries",
          level: 1,
        },
        {
          id: 112,
          name: "Encyclopedias",
          level: 1,
        },
        {
          id: 113,
          name: "Atlases",
          level: 1,
        },
      ],
    },
  ]);
  return (
    <section className="category-list-container h-full">
      <ul className="category-list flex flex-col gap-[1rem] min-w-[26.5rem] h-full overflow-y-auto bg-slate-200">
        {categories.map((category, index) => {
          if (category.hasOwnProperty("sub_category")) {
            return (
              <li
                className="category-item text-[1.8rem]"
                key={category.id + category.level + index}
              >
                <details>
                  <summary className="cursor-pointer hover:bg-blue-300 p-[0.8rem_1.5rem] rounded-md">
                    {category.name}
                  </summary>
                  <ul className="category-sub-list pl-8">
                    {category.sub_category?.map((sub, index) => (
                      <li
                        className="category-item category-item text-[1.8rem] cursor-pointer hover:bg-blue-300 p-[0.8rem_1.5rem] rounded-md"
                        key={category.id + category.level + index}
                      >
                        {sub.name}
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            );
          }
          return (
            <li
              className="category-item text-[1.8rem] cursor-pointer hover:bg-blue-300 p-[0.8rem_1.5rem] rounded-md"
              key={category.id + category.level + index}
            >
              {category.name}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Categories;
