import {configureStore} from "@reduxjs/toolkit";
import { AuthSlicePath } from "./slice/auth.slice";

export const store = configureStore({reducer:{
  [AuthSlicePath.name]:AuthSlicePath.reducer
}})