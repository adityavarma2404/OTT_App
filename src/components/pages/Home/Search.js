import React from 'react'

function Search() {
  return (
    <div className='search_container'>
        <div className='searchBox'>
            <input type="text" className='searchInput' placeholder='Search...'/>
            <p className='searchBoxMessage'>Just a demonstration of search page</p>
        </div>
    </div>
  )
}

export default Search