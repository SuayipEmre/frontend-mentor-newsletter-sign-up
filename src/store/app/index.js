import { configureStore } from "@reduxjs/toolkit";
import emailInput from "../features/emailInput";

export const store = configureStore({
    reducer:{
        usermail : emailInput
    }
})

