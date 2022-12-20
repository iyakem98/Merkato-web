import {CRYPTO_LIST_REQUEST, CRYPTO_LIST_SUCCESS, CRYPTO_LIST_FAIL} from '../constants/cryptoConstants.js'

export const cryptoListReducer = (state = {crypto: [] }, action) => {
    switch(action.type) {
        case CRYPTO_LIST_REQUEST: 
            return {loading: true, crypto: []}
        case CRYPTO_LIST_SUCCESS:
            return {loading: false, crypto: action.payload}
        case CRYPTO_LIST_FAIL:
             return {loading: false, error: action.payload}
        default: 
            return state
    }
}