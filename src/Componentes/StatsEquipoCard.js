import React from 'react'
import { Card, Col, Container,Row,ListGroup, ListGroupItem } from 'react-bootstrap'




function StatsEquipoCard({equipo, promedios}) {
        let arr = Object.values(equipo)
        let max = Math.max.apply(this,arr)

        
        

        var tipoDeEquipo=Object.keys(equipo)[Object.values(equipo).indexOf(max)]

        const atributosOrdenados = Object.entries(equipo)
        .sort(([,a],[,b]) => b-a)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

        function tipoDeEquipoSimbolo(){
            switch(tipoDeEquipo){
                case 'intelligence':
                    return <i className="fas fa-brain fa-1x"></i>
                case 'strength':
                    return <i className="fas fa-dumbbell fa-1x"></i>
                case 'speed':
                    return <i className="fas fa-walking fa-1x"></i>
                case 'durability':
                    return <i className="fas fa-heart fa-1x"></i>
                case 'power':
                    return <i className="fas fa-bomb fa-1x"></i>
                case 'combat':
                    return <i className="fas fa-fist-raised fa-1x"></i>
                default:
                    return <div></div> 
            }
        }

    return (
        <Container>
            <Card>
                <Row>
                    <Col>
                        <Card.Title className='px-3 py-2'> Tipo de Equipo: {Object.keys(equipo)[Object.values(equipo).indexOf(max)].toUpperCase()} {tipoDeEquipoSimbolo()}</Card.Title>
                        <ListGroup>
                            {Object.entries(atributosOrdenados).map((x,index) => {
                                
                                return <ListGroupItem key={index}><strong>{ x[0].charAt(0).toUpperCase() + x[0].slice(1)}</strong>: {x[1]}</ListGroupItem>
                            })}
                            <ListGroupItem><strong>Peso Promedio:</strong> {promedios.pesoPromedio.toFixed(2)}</ListGroupItem>
                            <ListGroupItem><strong>Altura Promedio:</strong> {promedios.alturaPromedio.toFixed(2)}</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default StatsEquipoCard
