import React from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'; // It has multiple exports so hay que importart el objeto especifico buscado... con apodo (?)
// Also se importa Route. Same redirect and switch

import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'
import MainNavigation from './shared/components/UIElements/Navigation/MainNavigation'
import UserPlaces from './places/pages/UserPlaces'

const App = () => {

  
  return <Router> 
    <MainNavigation /> {/* MainNavigation queda fuera del switch statement, porque la idea es que salga en every page, y el switch detiene el rendereado en cascada */}
    
    <main>
        <Switch> {/* Switch hace que la ejecución se detenga si se llegó a una fitting route.*/}

        <Route path= "/" exact={true}> 
          <Users /> 
        </Route>

        <Route path= "/places/new" exact={true}>  {/* exact hace que solo se considere match con rutas exactas */}
          <NewPlace /> 
        </Route>

   {/* The following is a dynamic route. Sintaxis es :dynamic content */}
        <Route path= "/:userId/places" exact={true}>
          <UserPlaces />
        </Route>
     
        
      

        <Route>
        <Redirect to="/" />
        </Route> 
        {/* El code se ejecuta top to bottom, so este seria el default "endpoint"... pero si no estuviera switch, se ejecutaría igual.*/}

        </Switch>
     </main>
  </Router>
}


export default App;
