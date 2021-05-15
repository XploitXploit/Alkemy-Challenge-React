import React from 'react'
import { Card,Button,ListGroup } from 'react-bootstrap'

function HeroeCards(heroes) {
    return (
        
        <Card className='my-3 mx-2 py-3 px-3 rounded' style={{width: '18rem'}}>
            <Card.Img variant='top' src={heroes.heroes['image']['url']}/>
            <Card.Body>
                <Card.Title>{heroes.heroes['name']}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Power Stats</Card.Subtitle>
                <ListGroup variant="flush">
                    <ListGroup.Item>Intelligence: {heroes.heroes['powerstats']['intelligence']}</ListGroup.Item>
                    <ListGroup.Item>Strength: {heroes.heroes['powerstats']['strength']}</ListGroup.Item>
                    <ListGroup.Item>Speed: {heroes.heroes['powerstats']['speed']}</ListGroup.Item>
                    <ListGroup.Item>Durability: {heroes.heroes['powerstats']['durability']}</ListGroup.Item>
                    <ListGroup.Item>Power: {heroes.heroes['powerstats']['power']}</ListGroup.Item>
                    <ListGroup.Item>Combat: {heroes.heroes['powerstats']['combat']}</ListGroup.Item>
                </ListGroup>
                <Button variant="primary">Agregar</Button>
            </Card.Body>
        </Card>
    )
}

export default HeroeCards
