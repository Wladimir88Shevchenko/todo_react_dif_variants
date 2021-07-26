import React from 'react';
import './item-status-filter.css';

const ItemStatusFilter = ({toDoData}) => {
    let toDoValue = toDoData.reduce((sum, item) => {
        if(!item.done){
            return sum + 1;
        }else{
            return sum
        }
    }, 0)

    const doneValue = toDoData.length - toDoValue;

    return(
        <div className="ItemStatusFilter">
            <span>{toDoValue} more to do,</span>
            <span> {doneValue} done</span>
        </div>
    );
}

export default ItemStatusFilter;