import {HEROE_ADD,
        HEROE_REMOVE,
        HEROE_PEDIDO,
        HEROE_EXITO,
        HEROE_FRACASO,
        HEROE_PEDIDO_ID,
        HEROE_EXITO_ID,
        HEROE_FRACASO_ID,
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

export const heroeBusquedaIdReducer = (state={heroe:{}},action) =>{
    switch(action.type){
        case HEROE_PEDIDO_ID:
            return {loading:true,heroe:{}}
        case HEROE_EXITO_ID:
            return {loading:false, heroe: action.payload}
        case HEROE_FRACASO_ID:
            return {loading:false, error: action.payload}
        default:
            return state
    }
}

export const heroeEquipoReducer = (state={equipoHeroes:[]},action) =>{
    const heroe = action.payload

    switch(action.type){
        
        case HEROE_ADD:
            
            
            const existeHeroe= state.equipoHeroes === null ?false : state.equipoHeroes.find(x=> x.id === heroe.id)
            const cantHeroesEquipo = state.equipoHeroes.length
            const cantHeroesGood = state.equipoHeroes.filter(x=> x.biography.alignment === 'good')
            const cantHeroesBad = state.equipoHeroes.filter(x=> x.biography.alignment === 'bad')

            
            if(existeHeroe){
                return{
                    ...state,
                    errorHeroe: {error:`Ya existe ${heroe.name} en el equipo`,heroe}
                }
            }else if(cantHeroesEquipo===6){
                return{
                    
                    ...state,
                    errorHeroe:{error:'No se puede agregar a mas de 6 Héroes',heroe}
                }
            }else if(cantHeroesGood.length===3 && heroe.biography.alignment==='good'){
                return{

                    ...state,
                    errorHeroe:{error:'No se puede agregar a mas Héroes del lado del bien',heroe}
                }
            }else if(cantHeroesBad.length===3 && heroe.biography.alignment==='bad'){
                return{
                    ...state,
                    errorHeroe:{error:'No se puede agregar a mas Héroes del lado del mal',heroe}
                }
            }else
            {
                
                return{
                    equipoHeroes: [...state.equipoHeroes, heroe]
                }
                
            }
            
        case HEROE_REMOVE:
            console.log(heroe)
            const heroes = state.equipoHeroes===null ? false : state.equipoHeroes.filter(x=>x.id !== heroe.id)
            
            return{
                equipoHeroes: [...heroes]
            }
            
        default:
            return state 
    }
}