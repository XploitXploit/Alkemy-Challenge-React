import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userLoginReducer} from './Reducers/userReducer';
import { heroeBusquedaReducer } from './Reducers/heroesReducer'
import { heroeEquipoReducer} from './Reducers/heroesReducer'
import {heroeBusquedaIdReducer} from './Reducers/heroesReducer'


const reducer = combineReducers({ 
    userLogin: userLoginReducer,
    heroeBusqueda: heroeBusquedaReducer,
    heroeEquipo: heroeEquipoReducer,
    heroeId: heroeBusquedaIdReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
                                JSON.parse(localStorage.getItem('userInfo')) : null
const busquedaInfoFromStorage = localStorage.getItem('heroeBusqueda') ?
                                JSON.parse(localStorage.getItem('heroeBusqueda')) : null
const heroeEquipoFromStorage = localStorage.getItem('equipoHeroes') ?
                                JSON.parse(localStorage.getItem('equipoHeroes')) : null

const initialState = {
    userLogin: {userInfo: userInfoFromStorage},
    heroeBusqueda:  {heroeBusqueda: busquedaInfoFromStorage},
    Equipo: {equipoHeroe: heroeEquipoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))


export default store;