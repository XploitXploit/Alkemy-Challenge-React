import React from 'react'
import { Container,Row} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import HeroeCardsHome from '../Componentes/HerosCardsHome'
import MensajeAlerta from '../Componentes/MensajeAlerta'
import StatsEquipoCard from '../Componentes/StatsEquipoCard'
import CalcularSumatoriaStats from '../Funciones/calculoStats'

function HomeScreen() {

    const equipoHeroe = useSelector(state => state.heroeEquipo)
    const {equipoHeroes} = equipoHeroe

    return (
        <Container xs={12}>
        <Row >
            <Row xs={8}>
            <h1>Equipo</h1>
                {equipoHeroes.length>0 ? equipoHeroes.map(h=> <HeroeCardsHome key={h.id} heroes={h}/>)
                :<MensajeAlerta variant='info'>Por el momento no tiene ningun Héroe en el equipo</MensajeAlerta>}
            </Row>

            <Row xs={4}>
                <h2>Stats</h2>
                
            </Row>
            <Row>
                {equipoHeroes.length> 0 ?<StatsEquipoCard equipo={CalcularSumatoriaStats(equipoHeroes)[0]} promedios={CalcularSumatoriaStats(equipoHeroes)[1]}/>:<div></div>}
            </Row>
        </Row>
        
            
        </Container>
    )
}

export default HomeScreen
