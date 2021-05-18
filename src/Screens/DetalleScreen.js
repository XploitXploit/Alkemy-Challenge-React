import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Container,Row } from 'react-bootstrap'
import DetalleHeroeCard from '../Componentes/DetalleHeroeCard'
import Loader from '../Componentes/Loader'
import { detalleHeroe} from '../Acciones/heroeAcciones'
import { useLocation } from 'react-router'



function DetalleScreen() {

    const heroeId = useSelector(state => state.heroeId)
    var {loading,heroe} = heroeId
    
    return (
        <Container>
            <Row>
            { loading ? <Loader>Loading</Loader> :  <DetalleHeroeCard heroe={heroe}/>} 
            </Row>
        </Container>
    )
}

export default DetalleScreen
