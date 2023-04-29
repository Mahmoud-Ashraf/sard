const SearchBar = () => {

    return (
        <div className='container text-center searchBar'>
            <input className='searchBar-input' placeholder='ابحث عن الخبر' />
            <h6 class="searchBar-exit"> الغاء</h6>
        </div>
    )
}

export default SearchBar;