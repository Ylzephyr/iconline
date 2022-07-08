import { atom } from "recoil";

type text = string;

const initailTextState: text = '';

export const textState = atom({
    key: 'textState',
    default: initailTextState
});