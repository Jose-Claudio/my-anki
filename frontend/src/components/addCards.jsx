import React from 'react'

export default props => (
    <div>
        <form >
            <div className="form-group">
                <label>Front</label>
                <input type="text" className="form-control"></input>
            </div>

            <div className="form-group">
                <label>Back</label>
                <input type="text" className="form-control"></input>
            </div>
            <button type="submit" class="btn btn-primary"><i className="fa fa-plus-square"></i></button>
        </form>
    </div>
)