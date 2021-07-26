import {
    addTask, deleteTask, incrId,
    toogleTask, filterActive, filterDone,
    filterAll, textFilter
} from './action-types'

const createNewTask = (text, id) => {
    return { label: text, id, important: false, done: false };
}

const initialState = {
    todos: [
        { label: "Download Windows to new pc for Katya", id: 0, important: false, done: false },
        { label: "Pick up the new phone for Inna", id: 1, important: false, done: false },
        { label: "Learn Redux for me", id: 2, important: false, done: false },
    ],
    filter: "all",
    textFilter: "",
    id: 3,
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case textFilter:
            return{
                ...state,
                textFilter: action.payload,
            }
        case filterActive:
            return {
                ...state,
                filter: "active",
            }
        case filterDone:
            return {
                ...state,
                filter: "done",
            }
        case filterAll:
            return {
                ...state,
                filter: "all",
            }
        case incrId:
            return {
                ...state,
                id: state.id + 1,
            }
        case addTask:
            const { id } = state;
            const newId = id + 1;
            const newTask = createNewTask(action.payload, newId);
            const newTodos = [...state.todos, newTask];
            return {
                ...state,
                todos: newTodos,
            };

        /* dispatch({
            type: toogleTask,
            payload: {
                id,
                property: prop,
            }
        }) */
        case toogleTask: {
            const newTodos = state.todos.map(item => {
                if (item.id !== action.payload.id) {
                    return (item);
                } else {
                    return {
                        ...item,
                        [action.payload.property]: !item[action.payload.property],
                    }
                }
            });

            return {
                ...state,
                todos: newTodos,
            }
        }

        case deleteTask: {
            const newTodos = state.todos.filter(
                (item) => item.id !== action.payload
            );
            return {
                ...state,
                todos: newTodos,
            }
        }


        default:
            return (state);
    }
}

export default todoReducer;