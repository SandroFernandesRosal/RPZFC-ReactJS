import "./header.css"
import { Link } from "react-router-dom"

export const Menu = () => {
  return (
        <>
        <Link to="/"><li>Home</li></Link>
        <Link to="/elenco"><li>Elenco</li></Link>
        <Link to="/titulos"><li>Títulos</li></Link>
        <Link to="/historia"><li>História</li></Link>
        <Link to="/fotos"><li>Fotos</li></Link>       
        </>
  )
}