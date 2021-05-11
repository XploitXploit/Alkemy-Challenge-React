import Header from './Componentes/Header'
import Footer from './Componentes/Footer'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomeScreen from './Screens/HomeScreen'
import EquipoScreen from './Screens/EquipoScreen'
import LoginScreen from './Screens/LoginScreen'
import BuscarScreen from './Screens/BuscarScreen'
import {RutaPrivada} from './Componentes/RutaPrivada'



function App() {
  return (
    <Router>
        <Header/>
          <main className="py-3">
            <Switch>
              <RutaPrivada exact path='/' component={HomeScreen}/>
              <RutaPrivada  path='/equipo' component={EquipoScreen}/>
              <Route  path='/login' component={LoginScreen}/>
              <RutaPrivada  path='/buscar' component={BuscarScreen}/>
            </Switch>
          </main>
        <Footer/>
    </Router>
  );
}

export default App;
