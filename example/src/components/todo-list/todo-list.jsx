import React from 'react';
import './todo-list.css';
import TodoListItem from '../todo-list-item';

const TodoList = () => {

    return(
        <div className="TodoList">
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <TodoListItem></TodoListItem>
                </li>
                <li className="list-group-item">
                    <TodoListItem></TodoListItem>
                </li>
                <li className="list-group-item">
                    <TodoListItem></TodoListItem>
                </li>
            </ul>
        </div>
    );
}

export default TodoList;