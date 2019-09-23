import React from 'react'

export default props => {
    
    return (  
        <div className="decks">  
            <span>Usuario</span> | <span>Deck</span>
            <div className="botao">                       
                <button className="btn btn-primary">Add</button>
                <button className="btn btn-success">Review</button>                      
                <button className="btn btn-danger">Delete</button>
            </div>
        </div>       
    )
}