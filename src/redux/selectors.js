// import { state } from "./reducer";

export const taskList = state => state.taskList;
console.log(taskList);
export const activeTaskEl = state => state.activeTask;

export const tasks = state => state.tasks;

export const completedTaskEl = state => state.completedTask;

export const active = state => state.active;

export const completed = state => state.completed;