import "./elenco.css"
import Guil from "../elenco/img/guil.jpg"
import Bigorna from "../elenco/img/bigorna.jpg"
import Eduardo from "../elenco/img/eduardo.jpg"
import Fala from "../elenco/img/fala.jpg"
import Giovanni from "../elenco/img/giovanni.jpg"
import Pablo from "../elenco/img/pablo.jpg"
import Robertinho from "../elenco/img/robertinho.jpg"
import Rodolfo from "../elenco/img/rodolfo.jpg"
import Wiki from "../elenco/img/wiki.jpg"
import Caio from "../elenco/img/caio.jpg"

export const Elenco = () => {


  const Player = (props) => {

    return(
      <li className="jogador">
        <img src={props.img} alt={props.title} />
        <figcaption>{props.title}</figcaption>
      </li>
    )
  }

  return(
    <>
    <h2>Elenco do RPZ</h2>
    <ul className="jogadores">

      <Player img={Guil} title="Guil"/>
      <Player img={Robertinho} title="Robertinho"/>
      <Player img={Caio} title="Caio"/>
      <Player img={Fala} title="Fala"/>
      <Player img={Eduardo} title="Eduardo"/>
      <Player img={Giovanni} title="Giovanni"/>
      <Player img={Wiki} title="Wiki"/>
      <Player img={Rodolfo} title="Rodolfo"/>
      <Player img={Bigorna} title="Bigorna"/>
      
    </ul>
    </>
  )
}