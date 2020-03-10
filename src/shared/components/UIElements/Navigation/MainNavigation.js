import React, {useState} from 'react'
import {Link} from 'react-router-dom'


import './MainNavigation.css'
import MainHeader from './MainHeader'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import BackDrop from '../Backdrop'


const MainNavigation = (props) => {

    const [drawerIsOpen, setDrawerIsOpen] = useState(false); //default state

    const openDrawer = () => {
        setDrawerIsOpen(true)
    }

    const closeDrawer = () => {
        setDrawerIsOpen(false)
    }




    return (
        <React.Fragment>
                                                                                                            {/* No podriamos returnear 2 root elements (IE Sidedrawer y MainHeader). React.Fragment tiene solo un valor sintáctico y funciona como ese single root returned object  dejandonos poner los otros dos como nested */}
            {drawerIsOpen && <BackDrop onClick={closeDrawer} />} 
            {/* Si el drawer is opend displayea un background que, al ser clickeado, recibe la callback para cambiar el estado*/}

             
            <SideDrawer show={drawerIsOpen} onClick = {closeDrawer}>
                <nav className="main-navigation__drawer-nav"> 
                <NavLinks />
                </nav>
            </SideDrawer> 
           

                
            <MainHeader>       
                <button className = "main-navigation__menu-btn" onClick={openDrawer}> 
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <h1 className="main-navigation__title"> 
                    <Link to= "/">Your Places</Link>
                </h1>

                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigation



