import axios from 'axios'

import {HEROE_ADD,
    HEROE_REMOVE,
    HEROE_PEDIDO,
    HEROE_EXITO,
    HEROE_FRACASO,
    } from '../Constantes/constantesHeroe'

export const listBusqueda = (busqueda) => async (dispatch) => {
    try{
        dispatch({type: HEROE_PEDIDO})

        const {data} = await axios.get(`/search/${busqueda}/`)
        
        dispatch({
            type:HEROE_EXITO,
            payload: data.results
        })

    }catch(error){
        dispatch({
            type: HEROE_FRACASO,
            payload: error.response && error.response.data.detail ?
            error.response.data.detail : error.message

        })
    }
}