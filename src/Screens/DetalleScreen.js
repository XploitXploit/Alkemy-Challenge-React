import { useSelector} from 'react-redux'
import { Container,Row } from 'react-bootstrap'
import DetalleHeroeCard from '../Componentes/DetalleHeroeCard'
import Loader from '../Componentes/Loader'




function DetalleScreen() {

    const heroeId = useSelector(state => state.heroeId)
    var {loading,heroe} = heroeId
    
    return (
        <Container>
            <Row>
            { loading ? <Loader/> :  <DetalleHeroeCard heroe={heroe}/>} 
            </Row>
        </Container>
    )
}

export default DetalleScreen
