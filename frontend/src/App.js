import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './anki.css'

import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Menu from './components/menu'
import Routes from './components/routes'

function App() {
  return (
    <div id="page"> 
      <header>
          <Header />
      </header>
      <nav>
        <Menu />
      </nav>
      <main>
        <div className="container">
        <Routes />
        </div>  
      </main>
      <footer>
          <Footer />
      </footer>
      
    </div>
  )
}

export default App;
