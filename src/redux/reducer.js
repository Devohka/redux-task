import { createReducer } from "@reduxjs/toolkit";
import {
    clickOnTask,
    clickNoOnTask,
    deleteTask,
    activeTask,
    allTask,
    completedTask,
    addTask
} from "./actions";
// localStorage.clear();

console.log("LocalStorage build");


// const state = {
//     taskList: JSON.parse(localStorage.getItem("taskList")),
//     activeTask: JSON.parse(localStorage.getItem("activeTask")).act,
//     tasks: "all",
//     completedTask: JSON.parse(localStorage.getItem("completed")).com,
//     active: JSON.parse(localStorage.getItem("activeTask")).num,
//     completed: JSON.parse(localStorage.getItem("completed")).numCom,
// };
// localStorage.setItem("taskList", JSON.stringify([...state.taskList]));
// localStorage.setItem("activeTask", JSON.stringify({ act: [...state.activeTask], num: state.active }));
// localStorage.setItem("completed", JSON.stringify({ com: [...state.completedTask], numCom: state.completed }));


const state = {
    taskList: [],
    activeTask: [],
    tasks: "all",
    completedTask: [],
    active: 0,
    completed: 0,
};
console.log(state.taskList);
export const reduser = createReducer(state, builder => {
    builder
        .addCase(addTask, (state, action) => {
            // localStorage.setItem("taskList", JSON.stringify([...state.taskList, action.payload]));
            return {
                taskList: [...state.taskList, action.payload],
                tasks: state.tasks,
                completedTask: state.completedTask,
                activeTask: state.activeTask,

                active: state.active,
                completed: state.completed
            }
        })
        .addCase(clickOnTask, (state, action) => {
            // localStorage.setItem("activeTask", JSON.stringify({ act: [...state.activeTask, ...action.payload.active], num: state.active + action.payload.num }));
            return {
                taskList: state.taskList,
                completedTask: state.completedTask,
                tasks: state.tasks,
                activeTask: [...state.activeTask, ...action.payload.active],

                active: state.active + action.payload.num,
                completed: state.completed
            }
        })
        .addCase(clickNoOnTask, (state, action) => {
            // localStorage.setItem("activeTask", JSON.stringify({ act: action.payload.active, num: state.active - action.payload.num }));
            return {
                taskList: state.taskList,
                completedTask: state.completedTask,
                tasks: state.tasks,
                activeTask: action.payload.active,

                active: state.active - action.payload.num,
                completed: state.completed
            }
        })
        .addCase(deleteTask, (state, action) => {
            localStorage.setItem("completed", JSON.stringify({
                com: [...state.completedTask, ...action.payload.completedTaskEl],
                numCom: state.completed + action.payload.completed
            }));
            localStorage.setItem("taskList", JSON.stringify(action.payload.taskList));
            return {
                taskList: action.payload.taskList,
                completedTask: [...state.completedTask, ...action.payload.completedTaskEl],
                tasks: state.tasks,
                activeTask: state.activeTask,

                active: state.active,
                completed: state.completed + action.payload.completed
            }
        })
        .addCase(activeTask, (state, action) => {
            return {
                taskList: state.taskList,
                completedTask: state.completedTask,
                activeTask: state.activeTask,

                tasks: action.payload,

                active: state.active,
                completed: state.completed
            }
        })
        .addCase(allTask, (state, action) => {
            return {
                taskList: state.taskList,
                completedTask: state.completedTask,
                activeTask: state.activeTask,

                tasks: action.payload,

                active: state.active,
                completed: state.completed
            }
        })
        .addCase(completedTask, (state, action) => {
            return {
                taskList: state.taskList,
                completedTask: state.completedTask,
                activeTask: state.activeTask,

                tasks: action.payload,

                active: state.active,
                completed: state.completed
            }
        })



    // return state;
});


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

// export default store;