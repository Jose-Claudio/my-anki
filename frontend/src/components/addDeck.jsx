import React from 'react'

export default props => (
    <div className="decksAdd">
        <from>
            <div className="form-group">
                <input  type="text" className="form-control" placeholder=" Enter User Name" />
            </div>

            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter Deck name" />
            </div>
            <button className="btn btn-info"><i className="fa fa-plus-square"></i></button>
        </from>       
    </div>
)