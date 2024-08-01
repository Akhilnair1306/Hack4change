import React from 'react';

function CategoryFilter() {
    const filterOptions = [
        {
            id: 1,
            name: 'All',
            value: 'all'
        },
        {
            id: 2,
            name: 'React',
            value: 'react'
        },
        {
            id: 3,
            name: 'Next',
            value: 'next'
        },
        {
            id: 4,
            name: 'Tailwind',
            value: 'tailwind'
        },
    ];

    return (
        <div>
            {filterOptions.map((item, index) => (
                <button key={index} className='border p-2 px-4 text-[12px] rounded-md mx-4 mt-4'>
                    <h2>{item.name}</h2>
                </button>
            ))}
        </div>
    );
}

export default CategoryFilter;
