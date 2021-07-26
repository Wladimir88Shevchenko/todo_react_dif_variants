import React from 'react';
import './todo-list.css';
import TodoListItem from '../todo-list-item';

const TodoList = (props) => {
    const { toDoData, deleteItem,
            toogleImp, toogleComplete } = props;
    const itemArr = toDoData.map((item) => {
        return (
            <li key={item.id} className="list-group-item">
                <TodoListItem 
                {...item} 
                deleteItem={deleteItem}
                toogleImp={toogleImp}
                toogleComplete={toogleComplete}
                />
            </li>
        )
    })

    return (
        <div className="TodoList">
            <ul className="list-group list-group-flush">
                {itemArr}
            </ul>
        </div>
    );
}

export default TodoList;