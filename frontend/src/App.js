import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './anki.css'

import React from 'react'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

function App() {
  return (
    <div id="page"> 
      <header>
          <Header />
      </header>
      <nav>
        
      </nav>
      <main>
        <div className="container">
          <Main />
        </div>  
      </main>
      <footer>
          <Footer />
      </footer>
    </div>
  )
}

export default App;
