import React, { useContext } from 'react';
import todoContext from '../../services/todoContext';
import './todo-list.css';
import TodoListItem from '../todo-list-item';

const TodoList = () => {

    const { visibleData: data } = useContext(todoContext);

    const todosItems = data.map((item) => (
        <li key={item.id} className="list-group-item">
            <TodoListItem {...item} />
        </li>
    ));

    return (
        <div className="TodoList">
            <ul className="list-group list-group-flush">
                {todosItems}
            </ul>
        </div>
    );
}

export default TodoList;