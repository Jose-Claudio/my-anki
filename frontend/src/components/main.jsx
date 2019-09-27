import React from 'react'

import DeckList from './deckList'
import AddDeck from './addDeck'

export default function Main(){
    
  return(
    <div className="conteudo">
      <h4>Add New Decks</h4>
      <AddDeck />
      <h4>Decks</h4>
      <DeckList/>
    </div>
  )
}