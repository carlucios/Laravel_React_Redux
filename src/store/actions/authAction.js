import {Http} from "../../config/globalConfig";
import {changeLoading} from "./loadingAction";
import {changeNotify} from "./notifyAction";

export const actionTypes = {
    GET_TOKEN: 'GET_TOKEN',
    LOGOUT: 'LOGOUT',
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    CHANGE: 'CHANGE'
}

export const getToken = (token) => ({type: actionTypes.GET_TOKEN, token})

export const removeToken = () => ({type: actionTypes.LOGOUT})

export const loading = (bool, msg = null) => ({
    type: actionTypes.LOADING,
    isLoading: {
        active: bool,
        msg: msg
    }
})

export const loginSuccess = (bool) => ({type: actionTypes.SUCCESS, bool})

export const loginError = (error) => ({type: actionTypes.ERROR, error})

export const changeValue = (value) => ({type: actionTypes.CHANGE, value})

export const getUserToken = () => dispatch => localStorage
    .getItem('acess_token')
    .then(res => {
        dispatch(loading(false));
        if (typeof res !== 'udefined') {
            dispatch(getToken(res));
        }
    })

export const setUserToken = (token) => dispatch => {
    localStorage.setItem('acess_token', token);
    dispatch(loading(false))
    dispatch(loginSuccess(true))
}

export const login = (credentials) => {
    return dispatch => {
        dispatch(changeLoading({open: true, msg: "Autenticando..."}));
        return Http
            .post('/oauth/token', {
            grant_type: 'password',
            client_id: 2,
            client_secret: 'pIwrABI0DRqxKyLGPCjc2F93N1sR6yGUBJTi2pHV',
            username: credentials.username,
            password: credentials.password
        })
            .then(res => {
                dispatch(changeLoading({open: false, msg: ""}));

                if (typeof res !== 'udefined') {
                    dispatch(setUserToken(res.data.acess_token))
                }
            })
            .catch(error => {
                dispatch(changeLoading({open: false, msg: ""}));
                if(error.response){
                    if(error.response.status === 401 || error.response.status === 400){
                        dispatch(changeNotify({
                            open: true,
                            msg: 'Há alguma incoerência no Username e Password fornecidos',
                            class: 'error'
                        }))
                    }
                }  else {                   
                    dispatch(changeNotify({
                        open: true,
                        msg: 'Há alguma incoerência no Username e Password fornecidos',
                        class: 'error'
                    }))

                }
            })
    }
}
