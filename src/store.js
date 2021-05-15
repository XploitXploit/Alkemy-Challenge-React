import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userLoginReducer} from './Reducers/userReducer';
import { heroeBusquedaReducer } from './Reducers/heroesReducer'


const reducer = combineReducers({ 
    userLogin: userLoginReducer,
    heroeBusqueda: heroeBusquedaReducer,
    
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
                                JSON.parse(localStorage.getItem('userInfo')) : null
const busquedaInfoFromStorage = localStorage.getItem('heroeBusqueda') ?
                                JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: {userInfo: userInfoFromStorage},
    heroeBusqueda:  {heroeBusqueda:busquedaInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))


export default store;