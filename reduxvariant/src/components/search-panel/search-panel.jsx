import React from 'react';
import { useDispatch} from 'react-redux';
import { filterActive, filterAll, filterDone} from '../../services/action-types';
import './search-panel.css';

const SearchPanel = () => {

    const dispatch = useDispatch();

    const changeFilter = (filterFlag) => {
        dispatch({type: filterFlag})
    }

    /* const inpVal = getElementById("textFilter").value; */

    const changeTextFilter = (e) => {
        const text = e.target.value;
        
        dispatch({
            type: "FILTER_TEXT",
            payload:  text,
        })
    }


    return (
        <div className="SearchPanel">
            <input 
            id="textFilter"
            className="SearchPanel-searchInput" 
            type="text" 
            placeholder="type to search"
            onChange={changeTextFilter} />
            <div className="btn-group SearchPanel-buttonGroup" role="group" aria-label="Basic outlined example">
                <button 
                type="button" 
                className="btn btn-outline-primary"             
                onClick={() => changeFilter(filterAll)}
                >All</button>
                <button 
                type="button" 
                className="btn btn-outline-primary"                
                onClick={() => changeFilter(filterActive)}
                >Active</button>
                <button 
                type="button" 
                className="btn btn-outline-primary"       
                onClick={() => changeFilter(filterDone)}
                >Done</button>
            </div>
        </div>
    );
}

export default SearchPanel;