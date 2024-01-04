import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isSubmit : false,
    useremail : ''
}
export const emailInput = createSlice({
    name : ' usermail input',
    initialState,
    reducers:{
        _setEmail : (state, action) => {
          state.useremail = action.payload
        },
        _setIsSubmit : (state, action) => {
          state.isSubmit = action.payload
        }
    }
})


export const {_setEmail, _setIsSubmit} = emailInput.actions
export default emailInput.reducer