import axios from 'axios'

import {HEROE_ADD,
    HEROE_REMOVE,
    HEROE_PEDIDO,
    HEROE_EXITO,
    HEROE_FRACASO,
    HEROE_PEDIDO_ID,
    HEROE_EXITO_ID,
    HEROE_FRACASO_ID,
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

export const detalleHeroe = (id) => async (dispatch) => {
    try{

        dispatch({type:HEROE_PEDIDO_ID})

        const data = await axios.get(`/${id}`)
        
        dispatch({
            type:HEROE_EXITO_ID,
            payload: data.data
        })
        console.log(data.data)
    }catch(error){
        dispatch({
            type: HEROE_FRACASO_ID,
            payload: error.response && error.response.data.detail ?
            error.response.data.detail : error.message

        })
    }
}

export const agregarAEquipo = (id) => async (dispatch) =>{
    const data = await axios.get(`/${id}/`)
    
    dispatch({
        type:HEROE_ADD,
        payload:data.data
    })
    
}

export const removerDeEquipo = (id) => async (dispatch) =>{
    const data = await axios.get(`/${id}/`)
    
    dispatch({
        type:HEROE_REMOVE,
        payload:data.data
    })
}