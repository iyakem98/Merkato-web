import {CRYPTO_LIST_REQUEST, CRYPTO_LIST_SUCCESS, CRYPTO_LIST_FAIL} from '../constants/cryptoConstants.js'

import axios from 'axios'


export const listCrypto = () => async(dispatch) => {
    try {
        dispatch({ type: CRYPTO_LIST_REQUEST})

        const { data } = await axios.get('/api/crypto')

        dispatch({
            type: CRYPTO_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: CRYPTO_LIST_FAIL,
            payload: 
                error.response && error.response.data.message? error.response.data.message: error.message,
        })
    }
}