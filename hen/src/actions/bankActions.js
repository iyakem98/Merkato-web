import {BANK_LIST_REQUEST, BANK_LIST_SUCCESS, BANK_LIST_FAIL, BANK_DETAILS_REQUEST, BANK_DETAILS_SUCCESS, BANK_DETAILS_FAIL} from '../constants/bankConstants.js'
import axios from 'axios'


export const listBanks = () => async(dispatch) => {
    try {
        dispatch({ type: BANK_LIST_REQUEST})

        const { data } = await axios.get('/api/banks')

        dispatch({
            type: BANK_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: BANK_LIST_FAIL,
            payload: 
                error.response && error.response.data.message? error.response.data.message: error.message,
        })
    }
}

export const listBankDetails  = (id) => async(dispatch) => {
    try {
        dispatch({ type: BANK_DETAILS_REQUEST})

        const { data } = await axios.get(`/api/banks/${id}`)

        dispatch({
            type: BANK_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: BANK_DETAILS_FAIL,
            payload: 
                error.response && error.response.data.message? error.response.data.message: error.message,
        })
    }
}