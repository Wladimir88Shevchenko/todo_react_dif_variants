import React from 'react';
import './todo-list.css';
import TodoListItem from '../todo-list-item';
import { useSelector } from 'react-redux';


const TodoList = () => {
    const {todos, filter, textFilter}= useSelector(state => state);

    let preVisibleTodos;
    let visibleTodos;
    if(filter === "active"){
        preVisibleTodos = todos.filter(item => !item.done);
    }else if(filter === "done"){
        preVisibleTodos = todos.filter(item => item.done);
    }else{
        preVisibleTodos = todos;
    }

    if(!textFilter.length){
        visibleTodos = preVisibleTodos;
    }else{
        visibleTodos = preVisibleTodos.filter(
            item => item.label.toLowerCase().indexOf(textFilter) > -1
        );
    }



    const itemList = visibleTodos.map(item => (
        <li key={item.id} className="list-group-item">
        <TodoListItem {...item} />
    </li>
    ));

    return(
        <div className="TodoList">
            <ul className="list-group list-group-flush">
               {itemList}
            </ul>
        </div>
    );
}

export default TodoList;