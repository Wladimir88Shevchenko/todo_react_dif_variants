import React, { useContext } from 'react';
import todoContext from '../../services/todoContext';
import './addition-panel.css';

const AdditionPanel = () => {
    const { addItem } = useContext(todoContext);

    const addNewItem = (e) => {
        e.preventDefault();
        let addInput = document.getElementById("newValueForTask");
        const newText = addInput.value;
        addItem(newText);
        addInput.value = "";
    }



    return (
        <div className="AdditionPanel">
            <form action="" onSubmit={addNewItem}>
                <input
                    id="newValueForTask"
                    type="text"
                    placeholder="what else to do?"
                />
                <button
                    type="submit"
                    className="btn btn-success"
                >Add Task</button>
            </form>
        </div>
    );
}

export default AdditionPanel;