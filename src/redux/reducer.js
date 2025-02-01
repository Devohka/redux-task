import { 
    createAction, 
    clickOnTask, 
    clickNoOnTask, 
    deleteTask, 
    activeTask,
    allTask,
    completedTask
} from "@reduxjs/toolkit";

const state = {
        taskList: [{
            text: "Зробити планувальник",
            id: 0,
    
        }],
        activeTask: [],
        tasks: "all",
        completedTask: [],
        active: 0,
        completed: 0,
    };
    
    console.log(state.taskList)
    
    
    // const reduser = (state, action) => {
    //     console.log(action.payload);
    //     if (action.type === "AddTask") {
    
    //         return {
    //             taskList: [...state.taskList, action.payload],
    //             tasks: state.tasks,
    //             completedTask: state.completedTask,
    //             activeTask: state.activeTask,
    
    //             active: state.active,
    //             completed: state.completed
    //         };
    
    //     } else if (action.type === "OnTask") {
    //         return {
    //             taskList: state.taskList,
    //             completedTask: state.completedTask,
    //             tasks: state.tasks,
    //             activeTask: [...state.activeTask, ...action.payload.active],
    
    //             active: state.active + action.payload.num,
    //             completed: state.completed
    //         };
    //     } else if (action.type === "NoOnTask") {
    //         return {
    //             taskList: state.taskList,
    //             completedTask: state.completedTask,
    //             tasks: state.tasks,
    //             activeTask: action.payload.active,
    
    //             active: state.active - action.payload.num,
    //             completed: state.completed
    //         };
    //     } else if (action.type === "DeleteTask") {
    //         return {
    //             taskList: action.payload.taskList,
    //             completedTask: [...state.completedTask, ...action.payload.completedTaskEl],
    //             tasks: state.tasks,
    //             activeTask: state.activeTask,
    
    //             active: state.active,
    //             completed: state.completed + action.payload.completed
    //         };
    //     }
        
        
    //     if (action.type === "ActiveTask") {
    //         return {
    //             taskList: state.taskList,
    //             completedTask: state.completedTask,
    //             activeTask: state.activeTask,
    
    //             tasks: action.payload,
    
    //             active: state.active,
    //             completed: state.completed
    //         };
    //     } else if (action.type === "AllTask") {
    //         return {
    //             taskList: state.taskList,
    //             completedTask: state.completedTask,
    //             activeTask: state.activeTask,
    
    //             tasks: action.payload,
    
    //             active: state.active,
    //             completed: state.completed
    //         };
    //     } else if (action.type === "CompletedTask") {
    //         return {
    //             taskList: state.taskList,
    //             completedTask: state.completedTask,
    //             activeTask: state.activeTask,
    
    //             tasks: action.payload,
    
    //             active: state.active,
    //             completed: state.completed
    //         };
    //     }
    //     return state;
    
    
    // };

    // store.dispatch({ type: "addNumber", payload: 5 }); цю дію в компоненті робить хук useDispatch
    // store.dispatch({ type: "minusNumber", payload: 2 }); 
    
    export default store;