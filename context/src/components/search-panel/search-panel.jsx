import React, {useContext} from 'react';
import todoContext from '../../services/todoContext';
import './search-panel.css';

const SearchPanel = () => {
    const {setFilter, setTextFilter} = useContext(todoContext);

    const changeTextFilter = (e) => {
        setTextFilter(e.target.value);
    } 

    return (
        <div className="SearchPanel">
            <input 
            onChange={changeTextFilter}
            className="SearchPanel-searchInput" 
            type="text" 
            placeholder="type to search" 
            />
            <div className="btn-group SearchPanel-buttonGroup" role="group" aria-label="Basic outlined example">
                <button 
                onClick={() => setFilter("all")}
                type="button" 
                className="btn btn-outline-primary"
                >All</button>
                <button 
                onClick={() => setFilter("active")}
                type="button" 
                className="btn btn-outline-primary"
                >Active</button>
                <button 
                onClick={() => setFilter("done")}
                type="button" 
                className="btn btn-outline-primary"
                >Done</button>
            </div>
        </div>
    );
}

export default SearchPanel;