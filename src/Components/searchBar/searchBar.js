import useTranslate from '../../Hooks/use-translate';
import Translate from '../../helpers/Translate/Translate';
import useHTTP from '../../Hooks/use-http';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SearchBar = (props) => {
    const navigate = useNavigate();
    const { sendRequest } = useHTTP();
    const [searchText, setSearchText] = useState('');

    const handleKeyDown = (e) => {
        // setSearchText(e.target.value);
        if (e.key === 'Enter') {
            navigate(`/news/search/${searchText}`);
            setSearchText('');
            props.onSearch();
        }
    }
    return (
        <>
            <div className="over-layyer-search-bar">
            </div>
            <div className='container text-center over-layyer-search-bar-content'>
                <input className='over-layyer-search-bar-content-input' onKeyDown={handleKeyDown} onChange={(e) => setSearchText(e.target.value)} value={searchText} placeholder={useTranslate('searchBar.placeholder')} />
                <button className="over-layyer-search-bar-content-exit" type="button" onClick={props.showSearchBar}><Translate id="buttons.cancel" /></button>
            </div>
        </>
    )
}

export default SearchBar;