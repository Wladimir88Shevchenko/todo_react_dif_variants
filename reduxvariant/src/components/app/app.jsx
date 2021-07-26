import React from 'react';
import './app.css';
import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import AdditionPanel from '../addition-panel/';

const App = () => {

    return(
        <div className="App">
            <header>
                <AppHeader />
                <ItemStatusFilter />
            </header>
            <SearchPanel />
            <TodoList />
            <AdditionPanel />
        </div>
    );
}

export default App;