import React, { useState, useEffect } from 'react'

export default function DeckLinst() {
    const [decks, setDecks] = useState([])

    const URL = 'http://localhost:3003/api/decks'
    
    useEffect( async () => {
      const response = await fetch(URL)
      const data = await response.json()
      
      setDecks(data)
    }, [])
    
    const renderRows = () => {
      return decks.map(deck => (
        <tr key={deck._id}>
          <td>{deck.userName}</td>
          <td>{deck.deckName}</td>
          <td>
              <button className="btn btn-danger"><i className="fa fa-trash"></i></button>
          </td>
        </tr>
      ))
    }
    
    return(
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Users Name</th>
                <th>Decks Name</th>
              </tr>
            </thead>
            <tbody>
              {renderRows()}
            </tbody>
          </table>
        </>
      )
      
    }