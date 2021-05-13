import React, {useState, useEffect} from 'react'
import { Form, Button, Container,Alert} from 'react-bootstrap'
import ContenedorFormulario from './ContenedorFormulario'
import { useFormik } from 'formik';
import axios from 'axios'
import { Redirect } from 'react-router';


const validate = values => {
    

    const errors = {};
 
    if (!values.password) {
      errors.password= 'Required';
    } else if (values.password.length < 3) {
      errors.password = 'Must be at least 3 caracters';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };

  

function FormikLogin() {
    const [token, setToken] = useState('')
    const [authError, setAuthError] = useState(false)
    
  useEffect(() => {
    if(token){
                localStorage.setItem('token',token.data.token)
                localStorage.setItem('loged',true)
                setAuthError(false)
    }
  }, [token])
    const formik = useFormik({
        initialValues: {  
          email: '',
          password: '',
        },
        validate,
        onSubmit: values => {
            try{
                const config = {
           
                    headers:{
                      'Content-Type': 'aplication/json'
                    }
                    
                }  
                async function getToken(){
                    const data = await axios.post('http://challenge-react.alkemy.org/',
                                                    {'email': values.email, 'password': values.password},
                                                    config).catch(function (error) {
                                                      console.log(error.message)
                                                      setAuthError(true)      
                                                    })
                   
                                                    setToken(data)                                                     
                                                    
                   
                }
                getToken()
                
            }catch (error) {
              
              
           }
            
          
        },
      });
    return (
        
        <ContenedorFormulario>
          { token ? <Redirect to="/"/>: <Container>
            <h1>Login</h1>
            {authError?<Alert variant='danger'>Credenciales Invalidas</Alert>:null}
            <Form onSubmit={formik.handleSubmit}>
            
            <Form.Group >
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                            id="email"
                            name="email"  
                            type="email" 
                            placeholder="Enter email" 
                            onChange={formik.handleChange} 
                            value={formik.values.email}
                            />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
                {formik.errors.email ? <Alert variant='info'>{formik.errors.email}</Alert> : null}
            </Form.Group>

            <Form.Group  className="py-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    id="password"
                    name="password"   
                    type="password" 
                    placeholder="Password" 
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    />
            </Form.Group>
            {formik.errors.password ? <Alert variant='info'>{formik.errors.password}</Alert> : null}
            <Button  variant="primary" type="submit">
                Submit
            </Button>
            </Form>
           
        </Container>}
            
        </ContenedorFormulario>
        
        
    )
}

export default FormikLogin
