import React, { useState } from 'react';
import './app.css';
import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import AdditionPanel from '../addition-panel';

const App = () => {
    const toDoData = [
        { label: 'Learn React', id: 0, important: false, done: false },
        { label: 'Meet bride', id: 1, important: false, done: false },
        { label: 'Relax', id: 2, important: false, done: false },
        { label: 'Workout', id: 3, important: false, done: false },
    ];

    const [data, setData] = useState(toDoData);
    const [filter, setFilter] = useState("all");
    const [filterText, setFilterText] = useState("");

    const deleteItem = (id) => {
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
    }

    const toogleImp = (id) => {
        const newData = data.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    important: !item.important,
                }
            } else {
                return (item);
            }
        });
        setData(newData);
    }

    const toogleComplete = (id) => {
        const newData = data.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    done: !item.done,
                }
            } else {
                return (item);
            }
        });
        setData(newData);
    }

    const addTask = (task, id) => {
        const newTask = { label: task, id: id, important: false, done: false };
        setData((oldValue) => {
            return ([
                ...oldValue,
                newTask
            ]);
        });
    }

    const changeFilterText = (text) => {
        setFilterText(text);
    }

    const showAllTasks = () => {
        setFilter("all");
    }

    const showActiveTasks = () => {
        setFilter("active");
    }

    const showDoneTasks = () => {
        setFilter("done");
    }

    const changeVisibleData = (data, filter, filterText) => {
        let dataForShow;
        let newShowData;
        if (filter === "active") {
            const onlyActiveTasks = data.filter(task => task.done === false);
            dataForShow = onlyActiveTasks;
        } else if (filter === "done") {
            const onlyDoneTasks = data.filter(task => task.done === true);
            dataForShow = onlyDoneTasks;
        } else {
            dataForShow = data;
        }

        if (filterText.length) {
            newShowData = dataForShow.filter((item) => item.label.toLowerCase()
                .indexOf(filterText.toLowerCase()) > -1);
        } else {
            newShowData = dataForShow;
        }

        return (newShowData);
    }



    const visibleData = changeVisibleData(data, filter, filterText);


    return (
        <div className="App">
            <header>
                <AppHeader />
                <ItemStatusFilter toDoData={data} />
            </header>
            <SearchPanel
                showAllTasks={showAllTasks}
                showActiveTasks={showActiveTasks}
                showDoneTasks={showDoneTasks}
                changeFilterText={changeFilterText}
            />
            <TodoList
                toDoData={visibleData}
                deleteItem={deleteItem}
                toogleImp={toogleImp}
                toogleComplete={toogleComplete}
            />
            <AdditionPanel toDoData={data} addTask={addTask} />
        </div>
    );
}

export default App;