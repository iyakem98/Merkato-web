import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {bankListReducer, bankDetailsReducer} from './reducers/bankReducers'
import { cryptoListReducer } from './reducers/cryptoReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer } from './reducers/userReducers.js'

const reducer = combineReducers({
    bankList: bankListReducer,
    bankDetails: bankDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    cryptoList: cryptoListReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')): []

const userInfoFromStorage = localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')): null

const initialState = {
    cart: {cartItems: cartItemsFromStorage},
    userLogin: {userInfo: userInfoFromStorage}
}
const middleWare = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)) )

export default store

