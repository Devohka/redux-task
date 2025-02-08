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

const state = {
    taskList: JSON.parse(localStorage.getItem("taskList")),
    activeTask: JSON.parse(localStorage.getItem("activeTask")).act,
    tasks: "all",
    completedTask: JSON.parse(localStorage.getItem("completed")).com,
    active: JSON.parse(localStorage.getItem("activeTask")).num,
    completed: JSON.parse(localStorage.getItem("completed")).numCom,
};

console.log(state.taskList)
// localStorage.clear();
localStorage.setItem("taskList", JSON.stringify([{text:"Зробити планувальник",id:0}]));
localStorage.setItem("activeTask", JSON.stringify({ act: [], num: 0 }));
localStorage.setItem("completed", JSON.stringify({ com: [], numCom: 0 }));


export const reduser = createReducer(state, builder => {
    builder
        .addCase(addTask, (state, action) => {
            localStorage.setItem("taskList", JSON.stringify([...state.taskList, action.payload]));
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
            localStorage.setItem("activeTask", JSON.stringify({ act: [...state.activeTask, ...action.payload.active], num: state.active + action.payload.num }));
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
            localStorage.setItem("activeTask", JSON.stringify({ act: action.payload.active, num: state.active - action.payload.num }));
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


    localStorage.setItem("completedTask", JSON.stringify(state.completedTask));

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