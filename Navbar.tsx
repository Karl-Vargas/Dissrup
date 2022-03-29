import { useState } from "react"

const Navbar = () => {

    const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}>Home</a>

      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a>

      <a href="#products" onClick={() => setActiveNav('#products')} className={activeNav === '#products' ? 'active' : ''} >Products</a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a>

    </nav>  )
}

export default Navbar