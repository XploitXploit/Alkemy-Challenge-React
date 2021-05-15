import React,{useState,useEffect} from 'react'
import { useFormik } from 'formik';
import { Form, Button, Container,Col,Row,Alert, CardGroup } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import HeroeCards from '../Componentes/HerosCards';
import { listBusqueda } from '../Acciones/heroeAcciones'

import Loader from '../Componentes/Loader';
import MensajeAlerta from '../Componentes/MensajeAlerta';

const validate = values => {
    

    const errors = {};
 
    if (!values.heroe) {
      errors.heroe= 'Campo Requerido';
    }
     return errors;
  };

function BuscarScreen() {
    const dispatch=useDispatch()

    const listHeroes= useSelector(state => state.heroeBusqueda)
    const {heroes,loading,error} = listHeroes
    
    
    
  

    const formik = useFormik({
        initialValues: {  
          heroe: '',
        },
        validate,
        onSubmit: values => {
           dispatch(listBusqueda(formik.values.heroe))
           
        },
      });

    return (
        <Container>
            <h1>Busqueda de Heroes</h1>
            <Form onSubmit={formik.handleSubmit}>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Control
                            id='heroe'
                            name="heroe"
                            className='my-3' 
                            type="text" 
                            placeholder="Ingrese el nombre del heroe a buscar"
                            onChange={formik.handleChange('heroe')} 
                            value={formik.values.heroe} />    
                    </Form.Group>
                </Col>
                
               
                <Col>
                    <Button className="my-3" variant="primary" type="submit">Buscar</Button>
                </Col>
            </Row>

            <Row>
                <Row>
                    
                    {heroes ? heroes.map(h=> <HeroeCards key={h['id']} heroes={h}/>):<div></div> }
                    
                    
                </Row>

                        
            </Row>

                
            </Form>
            {formik.errors.heroe ? <Alert variant='info'>{formik.errors.heroe}</Alert> : null}
        </Container>
        
    )
}

export default BuscarScreen
