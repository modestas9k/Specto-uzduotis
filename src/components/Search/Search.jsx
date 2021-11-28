import './Search.css';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as Clear } from '../../assets/clearSearch.svg';

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
                <Clear className="search__clear" /> Valyti
            </button>
        </label>
    );
}
