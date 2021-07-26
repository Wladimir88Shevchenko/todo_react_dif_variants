import React from 'react';
import { useSelector } from 'react-redux';
import './item-status-filter.css';

const ItemStatusFilter = () => {

    const {todos} = useSelector(stater => stater);

    const activeTodos = todos.reduce((sum, task) => {
        if(!task.done){
            return sum + 1
        }else{
            return sum
        }
    }, 0)

    const doneTodos = todos.length - activeTodos;

    return(
        <div className="ItemStatusFilter">
            <span>{activeTodos} more to do,</span>
            <span> {doneTodos} done</span>
        </div>
    );
}

export default ItemStatusFilter;