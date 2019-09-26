import React from 'react'

export default props => (
    <nav className="bav flex-column">
        <a className="nav-link" href="/"><i className="fa fa-home"></i> Home</a>
        <a className="nav-link" href="/addCards">Add new Cards</a>
        <a className="nav-link" href="/review">Review Decks</a> 
    </nav>
)