import React, { useState } from 'react';
import styled from 'styled-components';
import { usePage } from '@inertiajs/react';
import useTranslation from '@/hooks/use-translation';

const VideoFilterCategory = () => {
  const { t } = useTranslation();
  const { postCategories } = usePage().props;

  const initialQueryParams = new URLSearchParams(window.location.search);
  const currentPath = window.location.pathname;

  const [selectedCategory, setSelectedCategory] = useState<string>(initialQueryParams.get('category_code') || '');

  const handleFilter = (code: string) => {
    const queryParams = new URLSearchParams(window.location.search);

    if (code) {
      queryParams.set('category_code', code);
    } else {
      queryParams.delete('category_code');
    }

    queryParams.set('page', '1');
    window.location.href = `${currentPath}?${queryParams.toString()}`;
  };

  return (
    <StyledWrapper className="my-10 px-6 lg:px-0">
      <div className="btn-group">
        <button
          className={`btn hover:-translate-x-2 hover:-translate-y-2 ${selectedCategory === '' ? 'active' : ''}`}
          onClick={() => {
            setSelectedCategory('');
            handleFilter('');
          }}
        >
          {t('All')}
        </button>

        {postCategories?.map((category: any) => (
          <button
            key={category.code}
            className={`btn hover:-translate-x-2 hover:-translate-y-2 ${selectedCategory === category.code ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory(category.code);
              handleFilter(category.code);
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn-group {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .btn {
    padding: 10px 10px;
    font-weight: 600;
    background: white;
    color: blueviolet;
    border-radius: 0.5rem;
    cursor: pointer;
    border: 1px solid blueviolet;
    transition: all 0.3s ease;
  }

  .btn:hover { 
    border-color: rgb(238, 103, 238);
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px,
      rgba(240, 46, 170, 0.3) 10px 10px,
      rgba(240, 46, 170, 0.2) 15px 15px;
  }

  .btn.active {
    background-color: blueviolet;
    color: white;
  }
`;

export default VideoFilterCategory;
