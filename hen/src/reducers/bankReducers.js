import {BANK_LIST_REQUEST, BANK_LIST_SUCCESS, BANK_LIST_FAIL, BANK_DETAILS_REQUEST, BANK_DETAILS_SUCCESS, BANK_DETAILS_FAIL} from '../constants/bankConstants.js'

export const bankListReducer = (state = {banks: [] }, action) => {
    switch(action.type) {
        case BANK_LIST_REQUEST: 
            return {loading: true, banks: []}
        case BANK_LIST_SUCCESS:
            return {loading: false, banks: action.payload}
        case BANK_LIST_FAIL:
             return {loading: false, error: action.payload}
        default: 
            return state
    }
}

export const bankDetailsReducer = (state = {bank: {} }, action) => {
    switch(action.type) {
        case BANK_DETAILS_REQUEST: 
            return {loading: true, bank: []}
        case BANK_DETAILS_SUCCESS:
            return {loading: false, bank: action.payload}
        case BANK_DETAILS_FAIL:
             return {loading: false, error: action.payload}
        default: 
            return state
    }
}