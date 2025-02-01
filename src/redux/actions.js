import { createAction } from "@reduxjs/toolkit";

const createNumder = () => {
    return Math.round(Math.random() * (9999 - 5) + 5);
};

export const addTask = createAction("AddTask", e => {
    return {
        payload: {
            text: e.currentTarget.elements.textInput.value,
            id: createNumder(),

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

export const clickNoOnTask = createAction("OnTask", arry => {
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