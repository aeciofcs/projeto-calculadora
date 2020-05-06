import React from 'react'
import './Button.css'

//criando componentes sem estado.
export default props => 
    <button className="button">
        {props.label}
    </button>