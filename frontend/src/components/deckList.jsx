import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function DeckLinst() {
    const [decks, setDecks] = useState([])
    
    const URL = 'http://localhost:3003/api/decks'
    
      useEffect(async () => {
        const response = await fetch(URL)
        const data = await response.json()
        
        setDecks(data)
      }, [])

  
    function handleRemove(id){
      axios.delete(`${URL}/${id}`) 

    }  

    const renderRows = () => {
      return decks.map(deck => (
        <tr key={deck._id}>
          <td>{deck.deckName}</td>
          <td>
              <button className="btn btn-danger botao" onClick={() => handleRemove(deck._id)}>
                <i className="fa fa-trash"></i>
              </button>
          </td>
        </tr>
      ))
    }
    
    return(
          <table className="table">
            <thead>
              <tr>
                <th>Decks Name</th>
              </tr>
            </thead>
            <tbody>
              {renderRows()}
            </tbody>
          </table>
      )
      
    }