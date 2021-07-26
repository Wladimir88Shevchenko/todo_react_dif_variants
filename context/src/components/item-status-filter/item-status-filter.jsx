import React, {useContext} from 'react';
import todoContext from '../../services/todoContext';
import './item-status-filter.css';

const ItemStatusFilter = () => {
    const {visibleData: data} = useContext(todoContext);

    let inProgress = 0;

    data.forEach(element => {
        if(!element.done){
            ++inProgress;
        }
    });

    const doneTasks = data.length - inProgress;

    return(
        <div className="ItemStatusFilter">
            <span>{inProgress} more to do,</span>
            <span> {doneTasks} done</span>
        </div>
    );
}

export default ItemStatusFilter;