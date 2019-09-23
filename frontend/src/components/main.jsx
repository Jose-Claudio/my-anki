import React from 'react'
import DeckList from './deckList'
import AddDeck from './addDeck'

export default props => (
    
    <div className="conteudo">
      <h3>Add New Deck</h3>
      <AddDeck />
      <h3>Decks</h3>
      <DeckList />
    </div>
)