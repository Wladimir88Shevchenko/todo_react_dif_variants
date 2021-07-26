import React, {useState} from 'react';
import './app.css';
import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import todoContext from '../../services/todoContext';
import AdditionPanel from '../addition-panel/addition-panel';

let id = 0;

const App = () => {

    const createTask = (lbl) => {
        ++id;
        return{
            label: lbl, id, important: false, done: false
        };
    }

    const [data, setData] = useState([
        createTask("Learn React"),
        createTask("Meet with bride"),
        createTask("Watch in the window"),
        createTask("Walking"),
        createTask("Train with guys"),        
    ]);

    const [filter, setFilter] = useState("all");
    const [textFilter, setTextFilter] = useState("");
 

    const toogleProperty = (property, id) => {
        const newArr = data.map((item) => {
            if(item.id !== id){
                return(item);
            }else{
                return{
                    ...item,
                    [property]: !item[property]
                }
            }
        });
        setData(newArr);
    }

    const deleteItem = (id) => {
        const newArr = data.filter((item) => item.id !== id);
        setData(newArr);
    }

    const addItem = (text) => {
        const newItem = createTask(text);
        const newData = [...data, newItem];
        setData(newData);
    }
    

    const changeVisibleData = (data, filter) => {
        if(filter === "active"){
            return data.filter(item => item.done === false);
        }else if(filter === "done"){
            return data.filter(item => item.done === true);
        }else{
            return data;
        }
    }

    const changeVisibleByText = (data, filter) => {
        const newData = data.filter((item) => item.label.toLowerCase().indexOf(filter.toLowerCase()) > -1);
        return(newData);
    }

    const prepearingData = filter === "all" ? data : changeVisibleData(data, filter);
    const visibleData = textFilter ? changeVisibleByText(prepearingData, textFilter) : prepearingData;

    const contextValue = {
        setTextFilter,
        visibleData,
        toogleProperty,
        deleteItem,
        addItem,
        setFilter,
    }

    return (
        <todoContext.Provider value={contextValue}>
            <div className="App">
                <header>
                    <AppHeader />
                    <ItemStatusFilter />
                </header>
                <SearchPanel />
                <TodoList />
                <AdditionPanel />
            </div>
        </todoContext.Provider>
    );
}

export default App;