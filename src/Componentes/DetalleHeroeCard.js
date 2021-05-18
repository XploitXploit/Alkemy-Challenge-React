
import { Card,Container,Row,Col, ListGroup,Button} from 'react-bootstrap'
import { useHistory } from 'react-router'





function DetalleHeroeCard({heroe}) {
    const history = useHistory()
    
    const volverClicked = () =>{
        history.push('/buscar')
    }
    
    return (
        <Container className="d-flex vh-100">
            <Row className="m-auto align-self-center">
                
                <Card style={{width: '56rem'}} rounded >
                <Row>
                <Col>
                    <Card.Img variant='top' src={heroe.image.url}/>
                </Col>
                <Col>
                <Card.Title>Detalles</Card.Title>
                <ListGroup variant="flush" >
                    <ListGroup.Item variant='primary'><strong>Peso:</strong> {heroe.appearance.weight[1]}</ListGroup.Item>
                    <ListGroup.Item><strong>Altura: </strong> {heroe.appearance.height[1]}</ListGroup.Item>
                    <ListGroup.Item variant='primary'><strong>Nombre: </strong>{heroe.biography['full-name']}</ListGroup.Item>
                    <ListGroup.Item><strong>Aliases: </strong>{heroe.biography['aliases'][0]}/{heroe.biography['aliases'][1]}</ListGroup.Item>
                    <ListGroup.Item variant='primary'><strong>Color de Ojos: </strong>{heroe.appearance['eye-color']}</ListGroup.Item>
                    <ListGroup.Item><strong>Color de Cabello: </strong>{heroe.appearance['hair-color']}</ListGroup.Item>
                    <ListGroup.Item><strong>Lugar de Trabajo: </strong>{heroe.work.base}</ListGroup.Item>
                </ListGroup>
                
                </Col>   
                </Row>
                
                <Button variant='primary' onClick={volverClicked}>Volver</Button>
                </Card>
               
                    
                
            </Row>
            
        </Container>
        
    )
}

export default DetalleHeroeCard
