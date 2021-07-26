import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, incrId } from '../../services/action-types';
import './addition-panel.css';

const AdditionPanel = () => {

    const [label, setLabel] = useState("");
    const dispatch = useDispatch();

    const saveValueToState = (e) => {
        const text = e.target.value;
        setLabel(
            text
        );
    }

    const useAddNewTaskToState = () => {
        dispatch({
            type: addTask,
            payload: label,
        });
        dispatch({ type: incrId });
        document.getElementById("newTask").value="";
    }
   

    return (
        <div
            className="AdditionPanel"
        >   <input
                onChange={saveValueToState}
                type="text"
                placeholder="write new task here"
                id="newTask"
                />
            <button
                type="button"
                className="btn btn-primary"
                onClick={useAddNewTaskToState}
            >Add</button>
        </div>
    );
}

export default AdditionPanel;