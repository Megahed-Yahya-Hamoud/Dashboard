import { createSlice } from "@reduxjs/toolkit";
import { IStudent } from "@utilities/interfaces/StudentInterfce";

export interface IStartState {
  student: IStudent | null;
}

const storedData = localStorage.getItem("student");

const initialState: IStartState = {
  student: storedData ? JSON.parse(storedData) : null,
};

const StudentSlice = createSlice({
  name: "Student",
  initialState,
  reducers: {
    getStudent: (state, action) => {
      state.student = action.payload;
    },
  },
});

export const { getStudent } = StudentSlice.actions;

export default StudentSlice.reducer;
