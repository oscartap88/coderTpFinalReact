import { Link } from "react-router-dom";
import Button from "../Button";

import styles from "./navbar.module.css"
import { BsCart3 } from 'react-icons/bs';


const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <Link to="/"><p>Home</p></Link>
        <Link to="/products"><p>Todos los tragos</p></Link>
        <Link to="/preparation"><p>Preparaciones</p></Link>
        <Link to="/cart"><p><BsCart3 /></p></Link>
        
        
    
        
        
        
       
    </nav>
  )
}

export default Navbar