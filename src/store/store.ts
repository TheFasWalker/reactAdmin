import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReduser from './slices/authSlice'
import userReduser from './slices/userSlice'

const rootReduser = combineReducers({
    authReduser,
    userReduser

});
export const setupStore = ()=>{
    return configureStore({
        reducer:rootReduser
    })
};

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];