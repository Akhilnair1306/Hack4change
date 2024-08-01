import React from 'react'
import SearchBar from './SearchBar'

function Header() {
  return (
    <div className='ml-64 p-6 border-b flex'>
        <SearchBar/>
    </div>
  )
}

export default Header