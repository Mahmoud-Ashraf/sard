const SearchBar = (props) => {

    return (
        <>
            <div className="over-layyer-search-bar">
            </div>
            <div className='container text-center over-layyer-search-bar-content'>
                <input className='over-layyer-search-bar-content-input' placeholder='ابحث عن الخبر' />
                <h6 className="over-layyer-search-bar-content-exit" type="" onClick={props.showSearchBar}> الغاء</h6>
            </div>
        </>
    )
}

export default SearchBar;