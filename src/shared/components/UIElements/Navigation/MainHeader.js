import React from 'react'

import './MainHeader.css'

const MainHeader = (props) => {


    return <header className="main-header"> 
    {props.children} 
    </header>
    // props.children es un special prop. En vez de aclarar manualmente que de lo que le pasamos queremos que se displayee, va a displayear todo como es pasado.
}

export default MainHeader