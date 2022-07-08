import { atom } from "recoil";

interface Todo {
    id: string;
    name: string;
    completed: boolean;
}

const initialState: Todo[] = [];

const todoState = atom({
    key: 'todoState',
    default: initialState,
})