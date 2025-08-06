"use client";
import Link from "next/link";

export type Category = {
  id: number;
  name: string;
  route?: string;
  sub_category?: Array<Category>;
};

type CategoriesProp = {
  activeCategory?: string;
  handleHideDropdown?: () => void;
};

const Categories = ({ activeCategory, handleHideDropdown }: CategoriesProp) => {
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
          route: "biography-autobiography-memoir",
        },
        {
          id: 22,
          name: "Self-Help",
          route: "self-help",
        },
        {
          id: 23,
          name: "Health & Wellness",
          route: "health-wellness",
        },
        {
          id: 24,
          name: "Cooking / Food",
          route: "cooking-food",
        },
        {
          id: 24,
          name: "Travel",
          route: "travel",
        },
        {
          id: 25,
          name: "History",
          route: "history",
        },
        {
          id: 26,
          name: "Politics",
          route: "politics",
        },
        {
          id: 27,
          name: "True Crime",
          route: "true-crime",
        },
        {
          id: 28,
          name: "Psychology",
          route: "psychology",
        },
        {
          id: 29,
          name: "Philosophy",
          route: "philosophy",
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
          route: "picture-books",
        },
        {
          id: 32,
          name: "Coloring Books",
          route: "coloring-books",
        },
        {
          id: 33,
          name: "Young Adult",
          route: "young-adult",
        },
      ],
    },
    {
      id: 4,
      name: "Poetry",
      route: "poetry",
    },
    {
      id: 5,
      name: "Graphic Novels/Comics",
      route: "graphic-novels-comics",
    },
    {
      id: 6,
      name: "Art & Photography",
      route: "art-photography",
    },
    {
      id: 7,
      name: "Science & Nature",
      route: "science-nature",
    },
    {
      id: 8,
      name: "Business & Finance",
      route: "business-finance",
    },
    {
      id: 9,
      name: "Religion & Spirituality",
      route: "religion-spirituality",
    },
    {
      id: 10,
      name: "Sports & Outdoors",
      route: "sports-outdoors",
    },
    {
      id: 11,
      name: "Reference",
      sub_category: [
        {
          id: 111,
          name: "Dictionaries",
          route: "dictionaries",
        },
        {
          id: 112,
          name: "Encyclopedias",
          route: "encyclopedias",
        },
        {
          id: 113,
          name: "Atlases",
          route: "atlases",
        },
      ],
    },
  ];

  const hasSubCategory = (parent: Category, activeCat: string): boolean => {
    if (activeCat) {
      let parentSubCats = categories.find(
        (cat) => cat.id == parent.id
      )?.sub_category;
      if (parentSubCats) {
        return parentSubCats.some((cat) => cat.route == activeCat);
      }
      return false;
    }
    return false;
  };
  return (
    <section className="category-list-container h-full w-full">
      <ul className="category-list flex flex-col gap-[1rem] h-full w-full lg:w-auto overflow-y-auto bg-slate-200">
        {categories.map((category, index) => {
          if (category.hasOwnProperty("sub_category")) {
            return (
              <li
                className="category-item text-[1.8rem]"
                key={category.id + index}
              >
                <details open={hasSubCategory(category, activeCategory!)}>
                  <summary>{category.name}</summary>
                  <ul className="category-sub-list pl-8">
                    {category.sub_category?.map((sub, index) => (
                      <li className="category-item" key={category.id + index}>
                        {sub.route !== undefined ? (
                          <Link
                            onClick={handleHideDropdown}
                            href={`/books/genres/${sub.route}`}
                            className={`flex category-link ${
                              activeCategory == sub.route ? "active" : ""
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ) : (
                          <>
                            <Link
                              href={`/books/genres/${sub.name}`}
                              className="flex category-link"
                              onClick={handleHideDropdown}
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
            <li className="category-item" key={category.id + index}>
              {category.route !== undefined ? (
                <Link
                  onClick={handleHideDropdown}
                  href={`/books/genres/${category.route}`}
                  className={`flex category-link ${
                    activeCategory == category.route ? "active" : ""
                  }`}
                >
                  {category.name}
                </Link>
              ) : (
                <>
                  <Link
                    onClick={handleHideDropdown}
                    href={`/books/genres/${category.name}`}
                    className="flex category-link"
                  >
                    {category.name}
                  </Link>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Categories;
