import type { NextPage } from 'next'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import About from './About/About'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'

const Home: NextPage = () => {
  return (
    <div>
     <Header /> 
     <About />     
     <Navbar />
     <Products /> 
     <Contact />     
    </div>
  )
}

export default Home
