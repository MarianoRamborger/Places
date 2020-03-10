import React from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group' 
//animation library

import './SideDrawer.css'


const SideDrawer = (props) =>  {
       //Yeah you can store content en una constante. As long as despues returnes algo esta OK
   const content = (
        <CSSTransition in={props.show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>  
            <aside className="side-drawer" onClick = {props.onClick} > { props.children  } </aside>
            {/* A su vez este aside recibe un onClick que cambia el state del drawer, para cerrarlo once se clickee algo dentro del mismo*/}
        </CSSTransition>
   )


    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
    // Para que no sea rendereado en root (kinda dirty?) se lo hace renderear through a portal, en un div delimitado en public/index.html
    
}

export default SideDrawer   