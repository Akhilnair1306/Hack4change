import { Search } from 'lucide-react'
import React from 'react'

function SearchBar() {
  return (
    <div className='flex gap-3 text-[14px] items-center border p-2 rounded-md bg-gray-50 text-gray-400'>
        <Search />
        <input type="text" placeholder='Enter any text to search' />
    </div>
  )
}

export default SearchBar