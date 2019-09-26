import React from 'react'

export default props => {
    
    return (  
        <div className="decks">  
            <span>Usuario</span> | <span>Deck</span>
            <div className="botao">                                        
                <button className="btn btn-danger"><i className="fa fa-trash"></i></button>
            </div>
        </div>       
    )
}