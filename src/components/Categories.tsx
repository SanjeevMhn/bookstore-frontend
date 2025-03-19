import Link from "next/link";

export type Category = {
  id: number;
  name: string;
  route?: string;
  sub_category?: Array<Category>;
};

type CategoriesProp = {
  activeCategory?: string;
};

const Categories = ({ activeCategory }: CategoriesProp) => {
  const categories: Array<Category> = [
    {
      id: 1,
      name: "Fiction",
      sub_category: [
        {
          id: 11,
          name: "Literary Fiction",
          route: "literary-fiction",
        },
        {
          id: 12,
          name: "Historical Fiction",

          route: "historical-fiction",
        },
        {
          id: 13,
          name: "Mystery/Thriller/Crime",

          route: "mystery-thriller-crime",
        },
        {
          id: 14,
          name: "Romance",

          route: "romance",
        },
        {
          id: 15,
          name: "Science Fiction",

          route: "science-fiction",
        },
        {
          id: 16,
          name: "Horror",

          route: "horror",
        },
        {
          id: 17,
          name: "Adventure",
          route: "adventure",
        },
        {
          id: 18,
          name: "Fantasy",

          route: "fantasy",
        },
      ],
    },
    {
      id: 2,
      name: "Non Fiction",

      sub_category: [
        {
          id: 21,
          name: "Biography/Autobiography/Memoir",
        },
        {
          id: 22,
          name: "Self-Help",
        },
        {
          id: 23,
          name: "Health & Wellness",
        },
        {
          id: 24,
          name: "Cooking / Food",
        },
        {
          id: 24,
          name: "Travel",
        },
        {
          id: 25,
          name: "History",
        },
        {
          id: 26,
          name: "Politics",
        },
        {
          id: 27,
          name: "True Crime",
        },
        {
          id: 28,
          name: "Psychology",
        },
        {
          id: 29,
          name: "Philosophy",
        },
      ],
    },
    {
      id: 3,
      name: "Children's Book",

      sub_category: [
        {
          id: 31,
          name: "Picture Books",
        },
        {
          id: 32,
          name: "Coloring Books",
        },
        {
          id: 33,
          name: "Young Adult",
        },
      ],
    },
    {
      id: 4,
      name: "Poetry",
    },
    {
      id: 5,
      name: "Graphic Novels/Comics",
    },
    {
      id: 6,
      name: "Art & Photography",
    },
    {
      id: 7,
      name: "Science & Nature",
    },
    {
      id: 8,
      name: "Business & Finance",
    },
    {
      id: 9,
      name: "Religion & Spirituality",
    },
    {
      id: 10,
      name: "Sports & Outdoors",
    },
    {
      id: 11,
      name: "Reference",
      sub_category: [
        {
          id: 111,
          name: "Dictionaries",
        },
        {
          id: 112,
          name: "Encyclopedias",
        },
        {
          id: 113,
          name: "Atlases",
        },
      ],
    },
  ];
  return (
    <section className="category-list-container h-full">
      <ul className="category-list flex flex-col gap-[1rem] h-full overflow-y-auto bg-slate-200">
        {categories.map((category, index) => {
          if (category.hasOwnProperty("sub_category")) {
            return (
              <li
                className="category-item text-[1.8rem]"
                key={category.id + index}
              >
                <details open>
                  <summary>
                    {category.name}
                  </summary>
                  <ul className="category-sub-list pl-8">
                    {category.sub_category?.map((sub, index) => (
                      <li
                        className="category-item"
                        key={category.id + index}
                      >
                        {sub.route !== undefined ? (
                          <Link
                            href={`/books/genres/${sub.route}`}
                            className={`flex category-link ${
                              activeCategory == sub.route
                                ? "active"
                                : ""
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ) : (
                          <>
                            <Link
                              href={`/books/genres/${sub.name}`}
                              className="flex category-link"
                            >
                              {sub.name}
                            </Link>
                          </>
                        )}
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
              key={category.id + index}
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
