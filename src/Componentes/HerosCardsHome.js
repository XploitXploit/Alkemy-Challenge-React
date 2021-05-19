import React from 'react'
import { Card,Button,ListGroup,Row} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import { useHistory,useLocation } from 'react-router'
import { agregarAEquipo, detalleHeroe,removerDeEquipo } from '../Acciones/heroeAcciones'
import MensajeAlerta from '../Componentes/MensajeAlerta'
import {Link} from 'react-router-dom'


function HeroeCardsHome({heroes}) {
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()

    

    const agregarClick = () =>{

        dispatch(agregarAEquipo(heroes.id))
    }
    const quitarClick = () =>{
        
        dispatch(removerDeEquipo(heroes.id))
    }
    const infoClick = () =>{
        dispatch(detalleHeroe(heroes.id))
        history.push(`/heroe/${heroes.id}`)
    }

    const equipoHeroe = useSelector(state => state.heroeEquipo)
    const {errorHeroe, equipoHeroes} = equipoHeroe
    
    var heroeExiste = equipoHeroes.some(x=> x.id === heroes.id)
    
    console.log(heroeExiste)
    return (
        
        <Card border="secondary 5-px" className='my-3 mx-2 py-3 px-3 rounded' style={{width: '15rem'}} >
            <Link onClick={infoClick} to={`/heroe/${heroes.id}`}>
                <Card.Img variant='top'  src={heroes.image.url}/>
            </Link>
            <Card.Body>
                {
                    errorHeroe ?
                    errorHeroe.heroe.id===heroes.id
                    ?  <MensajeAlerta variant='info'>{errorHeroe.error}</MensajeAlerta>
                    : <div></div>
                    : <div></div>
                }
                
                    <Card.Title>{heroes.name}</Card.Title>
                    
                
                
                {location.pathname === '/'               
                ?(
                <ListGroup variant="flush" >
                    <ListGroup.Item variant='primary'>Intelligence: {heroes.powerstats.intelligence}</ListGroup.Item>
                    <ListGroup.Item>Strength: {heroes.powerstats.strength}</ListGroup.Item>
                    <ListGroup.Item variant='primary'>Speed: {heroes.powerstats.speed}</ListGroup.Item>
                    <ListGroup.Item>Durability: {heroes.powerstats.durability}</ListGroup.Item>
                    <ListGroup.Item variant='primary'>Power: {heroes.powerstats.power}</ListGroup.Item>
                    <ListGroup.Item>Combat: {heroes.powerstats.combat}</ListGroup.Item>
                </ListGroup>):<div></div>}
                {
                    location.pathname === '/'
                    ? (<div>
                        <Button variant="primary my-3 mx-auto" onClick={quitarClick}>Quitar</Button>
                        <Button variant="primary my-3 mx-auto">+Info</Button>
                    </div>):(
                        <div>
                            <Row>
                                <Button variant="primary my-3 mx-auto" onClick={agregarClick}>Agregar</Button>
                            </Row>
                            <Row>
                                <Button variant="primary my-3 mx-auto" onClick={infoClick}>+Info</Button>
                            </Row>
                            
                        </div>
                    )
                }
                
                
                
            </Card.Body>
        </Card>
        
        
    )
}

export default HeroeCardsHome
