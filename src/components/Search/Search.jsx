import './Search.css';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as ClearIcon } from '../../assets/clearSearch.svg';

export default function Search({ searchInputData }) {
    return (
        <label className="search" htmlFor="searchInput">
            <SearchIcon className="search__glass" />
            <input
                id="searchInput"
                type="search"
                placeholder="Kliento paieška"
                onChange={(e) => searchInputData(e.target.value)}
            />
            <button>
                <ClearIcon className="search__clear" /> Valyti
            </button>
        </label>
    );
}
