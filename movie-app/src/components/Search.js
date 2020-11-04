import React from 'react'

function Search ({handleInput, search}){
    return (
        <section className="Search_wrap">
            <input type="text" placeholder="Search your favorite movie" className="searchBox" onChange={handleInput} onKeyPress={search} />
        </section>
    );
}

export default Search