import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { router } from '@inertiajs/react';
import debounce from 'debounce';

const SearchInput = () => {
  const initialQueryParams = new URLSearchParams(window.location.search);
  const [search, setSearch] = useState(initialQueryParams.get('search') || '');
  const currentPath = window.location.pathname;

  const handleSearch = useCallback(
    debounce((term: string) => {
      const queryParams = new URLSearchParams(window.location.search);
      queryParams.set('search', term);
      queryParams.set('page', '1');
      router.get(`${currentPath}?${queryParams.toString()}`, {}, { preserveState: true });
    }, 500),
    [currentPath]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    handleSearch(value);
  };

  return (
    <StyledWrapper>
      <div className="search-container">
        <button className="search-icon" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="25px"
            width="25px"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.5"
              stroke="#fff"
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.5"
              stroke="#fff"
              d="M22 22L20 20"
            />
          </svg>
        </button>
        <input
          type="text"
          className="search-input text-gray-700"
          placeholder="Search..."
          name="search"
          value={search}
          onChange={handleChange}
        />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .search-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: fit-content;
  }

  .search-input {
    height: 50px;
    width: 50px;
    padding: 10px;
    padding-right: 40px;
    border: none;
    outline: none;
    border-radius: 50%;
    background-color: #7e4fd4;
    font-family: 'Trebuchet MS', sans-serif;
    font-size: 17px;
    transition: all 0.5s ease-in-out;
    box-shadow: 0px 0px 3px #f3f3f3;
  }

  .search-input::placeholder {
    color: #8f8f8f;
  }

  .search-icon {
    position: absolute;
    right: 0;
    width: 50px;
    height: 50px;
    background: transparent;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    pointer-events: auto;
    transition: background-color 0.2s linear;
  }

  .search-icon:focus ~ .search-input,
  .search-input:focus {
    width: 250px;
    border-radius: 0;
    background-color: transparent;
    border-bottom: 3px solid #7e4fd4;
    box-shadow: none;
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
  }
`;

export default SearchInput;
