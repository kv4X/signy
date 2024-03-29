import React, {useMemo, useReducer, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

//IMPORT REDUCER, INITIAL STATE AND ACTION TYPES
import reducer, {initialState, LOGGED_IN, LOGGED_OUT} from "../reducers/AuthReducer";

// CONFIG KEYS [Storage Keys]===================================
export const TOKEN_KEY = 'token';
export const USER_KEY = 'user';
export const keys = [TOKEN_KEY, USER_KEY];

// CONTEXT ===================================
const AuthContext = React.createContext();

function AuthProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState || {});

    // Get Auth state
    const getAuthState = async () => {
        try {
            //GET TOKEN && USER
            let accessToken = await AsyncStorage.getItem(TOKEN_KEY);
            let user = await AsyncStorage.getItem(USER_KEY);
            user = JSON.parse(user);
            
            if (accessToken !== null && user!== null) await handleLogin({accessToken, user});
            else await handleLogout();

            return {accessToken, user};
        } catch (error) {
            throw new Error(error)
        }
    };

    // Handle Login
    const handleLogin = async (data) => {
        try{
            //STORE DATA
            let {accessToken, user} = data;
            let data_ = [[USER_KEY, JSON.stringify(user)], [TOKEN_KEY, accessToken]];
            await AsyncStorage.multiSet(data_);

            //AXIOS AUTHORIZATION HEADER
            //axios.defaults.headers.common["Authorization"] = `Bearer ${data.accessToken}`;
            axios.defaults.headers.common["x-access-token"] = data.accessToken;
            //DISPATCH TO REDUCER
            dispatch({type: LOGGED_IN, user: data.user});
        }catch (error) {
            throw new Error(error);
        }
    };

    // Handle Logout
    const handleLogout = async () => {
        try{

            //REMOVE DATA
            await AsyncStorage.multiRemove(keys);

            //AXIOS AUTHORIZATION HEADER
            delete axios.defaults.headers.common["Authorization"];

            //DISPATCH TO REDUCER
            dispatch({type: LOGGED_OUT});
        }catch (error) {
            throw new Error(error);
        }
    };

    //UPDATE USER LOCAL STORAGE DATA AND DISPATCH TO REDUCER
    const updateUser = async (user) => {
        try {
            await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
            dispatch({type: LOGGED_IN, user}); //DISPATCH TO REDUCER
        } catch (error) {
            throw new Error(error);
        }
    };

    const value = useMemo(() => {
        return {state, getAuthState, handleLogin, handleLogout, updateUser};
    }, [state]);

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);
export { AuthContext, useAuth }
export default AuthProvider;