import React from 'react'

export default props => {
        return (
            <div className="decks">
                <table className="Table">
                    <tbody>
                        <tr>
                            <td>Usuário</td>
                            <td>Deck</td>
                            <td>
                                <button>Add</button>
                                <button>Review</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    
}