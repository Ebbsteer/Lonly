import { writable } from "svelte/store";

const storedTasks = JSON.parse(localStorage.getItem("tasks"));
export const tasks = writable(storedTasks);
tasks.subscribe(value => {
    localStorage.setItem("tasks", JSON.stringify(value));
});