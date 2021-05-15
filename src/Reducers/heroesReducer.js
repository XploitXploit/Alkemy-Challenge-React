import {HEROE_ADD,
        HEROE_REMOVE,
        HEROE_PEDIDO,
        HEROE_EXITO,
        HEROE_FRACASO,
        } from '../Constantes/constantesHeroe'


export const heroeBusquedaReducer = (state={heroes:[]},action)=>{
    switch(action.type){
        case HEROE_PEDIDO:
            return {loading:true,heroes:[]}
        case HEROE_EXITO:
            return {loading:false,heroes:action.payload}
        case HEROE_FRACASO:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}

export const heroeEquipoReducer = (state={heroes:[]},action) =>{
    switch(action.type){
        case HEROE_ADD:
            break
        default:
            return state
    }
}