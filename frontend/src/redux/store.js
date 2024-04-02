import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import listsReducer from "./listsSlice";
import historyReducer from "./historySlice";
import boardsReducer from "./boardsSlice";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        lists: listsReducer,
        history: historyReducer,
        boards: boardsReducer,
    },
});
