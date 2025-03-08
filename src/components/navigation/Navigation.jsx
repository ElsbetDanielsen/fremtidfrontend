import { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './nav.module.css'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={styles.navBar}>
      <Link to='/' smooth={true} duration={500} className={styles.navLogo}>
        <h1>Ai</h1>
      </Link>

      <button className={styles.hamburger} onClick={toggleMenu} style={{ zIndex: '1000' }}>
        <FaBars 
          className={`${styles.icon} ${isOpen ? styles.iconHide : styles.iconShow}`} 
        />
        <FaTimes 
          className={`${styles.icon} ${isOpen ? styles.iconShow : styles.iconHide}`} style={{ fontSize: '40px' }}
        />
      </button>

      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <li>
          <Link to="section1" smooth={true} duration={500}>Kriminalitet og AI</Link>
        </li>
        <li >
          <Link to="section2" smooth={true} duration={500}>Deepfake</Link>
        </li>
        <li>
          <Link to="section3" smooth={true} duration={500}>Udfordring</Link>
        </li>
        <li>
          <Link to="section4" smooth={true} duration={500}>Læs Mere</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar