import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CompilerSliceStateType {
    fullCode:{
        html: string;
        css: string;
        javascript: string;
    };
    currentLanguage: "html" | "css" | "javascript";
    
}

const initialState:CompilerSliceStateType = {
    fullCode:{
        html:"This is HTML",
        css:"This is CSS",
        javascript:"This is JavaScript",
    },
    currentLanguage: "html",
    
}
const compilerSlice = createSlice({
    name:"compilerSlice",
    initialState,
    reducers: {
        updateCurrentLanguage:(
            state,
                action:PayloadAction<CompilerSliceStateType["currentLanguage"]>
            ) => {
                state.currentLanguage = action.payload;
        },
        updateCodeValue:(
            state,
            action:PayloadAction<string>
        )=>{ 
            state.fullCode[state.currentLanguage]=action.payload;
        },
        
    },
})

export default compilerSlice.reducer;
export const {updateCurrentLanguage, updateCodeValue} = compilerSlice.actions;