import { createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';


const state = {
    taskList: [{
        text: "Зробити планувальник",
        id: 0,
    }],
    active: 0,
    completed: 0,
};

console.log(...state.taskList)


const reduser = (state, action) => {
    if (action.type === "AddTask") {
        console.log(action.payload);
        return {
            taskList: [...state.taskList, action.payload],
            active: state.active,
            completed: state.completed
        };
      
    } else if (action.type === "OnTask") {
        return {
            taskList: state.taskList,
            active: state.active + action.payload,
            completed: state.completed
        };
    }  else if (action.type === "NoOnTask") {
        return {
            taskList: state.taskList,
            active: state.active - action.payload,
            completed: state.completed 
        };
    } else if (action.type === "DeleteTask") {
        return {
            taskList: action.payload.taskList,
            active: state.active,
            completed: state.completed + action.payload.completed
        };
    }  
   return state;
   

};
const store = createStore(reduser, state, composeWithDevTools());
// store.dispatch({ type: "addNumber", payload: 5 }); цю дію в компоненті робить хук useDispatch
// store.dispatch({ type: "minusNumber", payload: 2 }); 

export default store;