"use client";
import { FC, SetStateAction, useRef } from "react";

type SearchFormPropType = {
  setModalTitle: React.Dispatch<SetStateAction<string | null>>;
};

const SearchForm: FC<SearchFormPropType> = ({ setModalTitle }) => {
  setModalTitle("Search");
  const input = useRef<HTMLInputElement>(null);

  return (
    <>
      {input.current?.focus()}
      <form className="search-form form">
        <div className="form-group default">
          <span className="icon-container" style={{ "--size": "2.5rem" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="fill-blue-600"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </span>
          <input
            type="text"
            name="full-search"
            id="full-search"
            className="form-control"
            placeholder="Search By Title, Author, Keyword or ISBN"
            ref={input}
          />
        </div>
      </form>
    </>
  );
};

export default SearchForm;
