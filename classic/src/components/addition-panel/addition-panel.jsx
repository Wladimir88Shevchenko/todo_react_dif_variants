import React from 'react';
import './addition-panel.css';

const AdditionPanel = ({addTask, toDoData}) => {

    const onKeyDownAdd = (e) => {
        if(e.keyCode === 13){
            const title = e.target.value;
            const id = toDoData.length;
            addTask(title, id);
            e.target.value = '';
        }
    }

    const addTaskFromButton = () => {
        const title = document.getElementById("addInput").value;
        const id = toDoData.length;
        addTask(title, id);
        document.getElementById("addInput").value = "";
    }


    return(
        <div className="AdditionPanel">
            <input onKeyDown={onKeyDownAdd} id="addInput" type="text" placeholder="what you want to do else?" />
            <button onClick={addTaskFromButton} type="button" className="btn btn-primary">Add</button>
        </div>
    );
}

export default AdditionPanel;