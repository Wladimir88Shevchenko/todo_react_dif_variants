import React from 'react';
import './search-panel.css';

const SearchPanel = () => {

    return (
        <div className="SearchPanel">
            <input className="SearchPanel-searchInput" type="text" placeholder="type to search" />
            <div className="btn-group SearchPanel-buttonGroup" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary">All</button>
                <button type="button" className="btn btn-outline-primary">Active</button>
                <button type="button" className="btn btn-outline-primary">Done</button>
            </div>
        </div>
    );
}

export default SearchPanel;