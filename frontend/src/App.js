import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
