import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'

import Main from './main'
import AddCards from './addCards'
import Review from './review'

export default props => (
    <BrowserRouter>
        <Route path='/' exact component={Main} />
        <Route path='/addCards' exact component={AddCards} />
        <Route path='/review' exact component={Review} />
    </BrowserRouter>
)



