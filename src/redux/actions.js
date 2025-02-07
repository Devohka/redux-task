import { createAction } from "@reduxjs/toolkit";



export const addTask = createAction("AddTask", (element, id) => {
    return {
        payload: {
            text: element,
            id: id,

        }
    };
});

export const clickOnTask = createAction("OnTask", arry => {
    return {
        payload: {
            num: 1,
            active: arry
        }
    };
});

export const clickNoOnTask = createAction("NoOnTask", arry => {
    return {
        payload: {
            num: 1,
            active: arry
        }
    };
});


export const deleteTask = createAction("DeleteTask", (arryDelete, arryCompleted) => {
    return {
        payload: {
            taskList: arryDelete,
            completed: 1,
            completedTaskEl: arryCompleted
        }
    };
});


export const activeTask = createAction("ActiveTask", text => {
    return {
        payload: text
    };
});

export const allTask = createAction("AllTask", text => {
    return {
        payload: text
    };
});

export const completedTask = createAction("CompletedTask", text => {
    return {
        payload: text
    };
});