import { createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';


const state = {
    taskList: [{
        text: "Зробити планувальник",
        id: 0,

    }],
    activeTask: [],

    completedTask: [],
    active: 0,
    completed: 0,
};

console.log(...state.taskList)


const reduser = (state, action) => {
    console.log(action.payload);
    if (action.type === "AddTask") {

        return {
            taskList: [...state.taskList, action.payload],
            activeTask: state.activeTask,
            active: state.active,
            completed: state.completed
        };

    } else if (action.type === "OnTask") {
        return {
            taskList: state.taskList,
            activeTask: [...state.activeTask, ...action.payload.active],
            active: state.active + action.payload.num,
            completed: state.completed
        };
    } else if (action.type === "NoOnTask") {
        return {
            taskList: state.taskList,
            activeTask: [...state.activeTask, ...action.payload.active],
            active: state.active - action.payload.num,
            completed: state.completed
        };
    } else if (action.type === "DeleteTask") {
        return {
            taskList: action.payload.taskList,
            completedTask: [...state.completedTask, action.payload.completedTaskEl],
            activeTask: state.activeTask,
            active: state.active,
            completed: state.completed + action.payload.completed
        };
    } else if (action.type === "ActiveTask") {
        return {
            taskList: action.payload,
            activeTask: state.taskList,
            active: state.active,
            completed: state.completed
        };
    } else if (action.type === "AllTask") {
        return {
            taskList: state.activeTask,
            activeTask: state.taskList,
            completedTask: state.taskList,
            active: state.active,
            completed: state.completed
        };
    } else if (action.type === "CompletedTask") {
        return {
            taskList: state.completedTask,
            completedTask: state.taskList,
            active: state.active,
            completed: state.completed
        };
    }
    return state;


};
const store = createStore(reduser, state, composeWithDevTools());
// store.dispatch({ type: "addNumber", payload: 5 }); цю дію в компоненті робить хук useDispatch
// store.dispatch({ type: "minusNumber", payload: 2 }); 

export default store;