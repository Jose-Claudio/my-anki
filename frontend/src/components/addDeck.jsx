import React, { useState } from 'react'
import axios from 'axios'

export default function AddDecks(){ 
    
    const URL = 'http://localhost:3003/api/decks'

    const [decks, setDecks] = useState([])

    function addDeck() {
        const deckName = decks.deckName
        axios.post(URL, {deckName})    
    }
    
    function handleChange(e){
        setDecks({...decks, deckName: e.target.value})
        
    }
    
    return(
    
        <div className="decksAdd">
            <form>
                <div className="form-group">
                    <input id="deckName" type="text" className="form-control" placeholder="Enter Deck name" 
                       onChange={handleChange} value={setDecks.deckName} />
                </div>
                <div className="botao">
                    <button className="btn btn-info" onClick={addDeck}><i className="fa fa-plus-square"></i></button>
                </div>
            </form>       
        </div>
    
    )
}