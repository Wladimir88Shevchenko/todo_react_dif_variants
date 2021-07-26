import React from 'react';
import './search-panel.css';

const SearchPanel = (props) => {
    const {
        showAllTasks,
        showActiveTasks,
        showDoneTasks,
        changeFilterText,
    } = props;

    const onChangeInput = (e) => {
        changeFilterText(e.target.value);
    }

    return (
        <div className="SearchPanel">
            <input 
            onChange={onChangeInput}
            className="SearchPanel-searchInput" 
            type="text" 
            placeholder="type to search"
             />
            <div className="btn-group SearchPanel-buttonGroup" role="group" aria-label="Basic outlined example">
                <button onClick={showAllTasks} type="button" className="btn btn-outline-primary">All</button>
                <button onClick={showActiveTasks} type="button" className="btn btn-outline-primary">Active</button>
                <button onClick={showDoneTasks} type="button" className="btn btn-outline-primary">Done</button>
            </div>
        </div>
    );
}

export default SearchPanel;