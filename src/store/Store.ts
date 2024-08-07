import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice";
import StudentSlice from "./slices/StudentSlice";
import FeedBackSlice from "./slices/FeedBackSlice";
export const Store = configureStore({
  reducer: {
    Auth: AuthSlice,
    Student: StudentSlice,
    FeedBack: FeedBackSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;
