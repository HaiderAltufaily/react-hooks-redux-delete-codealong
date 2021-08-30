import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
const todosSlice = createSlice({
  name: "todos",
  initialState: {
    entities: [], // array of todos
  },
  reducers: {
    todoAdded(state, action) {
      state.entities.push({ text: action.payload, id: uuid() });
    },
    todoRemoved(state, action) {
      const index = state.entities.findIndex((todo) => {
        return action.payload === todo.id;
      });
      state.entities.splice(index, 1);
    },
  },
});

export const { todoAdded, todoRemoved } = todosSlice.actions;

export default todosSlice.reducer;
