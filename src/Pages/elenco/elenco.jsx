import React from 'react'
import "./elenco.css"
import Guil from "./img/guil.jpg" 
import Bigorna from "./img/bigorna.jpg"
import Eduardo from "./img/eduardo.jpg"
import Fala from "./img/fala.jpg"
import Giovanni from "./img/giovanni.jpg"
import Pablo from "./img/pablo.jpg"
import Robertinho from "./img/robertinho.jpg"
import Rodolfo from "./img/rodolfo.jpg"
import Wiki from "./img/wiki.jpg"
import Caio from "./img/caio.jpg"

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
      <Player img={Pablo} title="Pablo"/>
      <Player img={Eduardo} title="Eduardo"/>
      <Player img={Giovanni} title="Giovanni"/>
      <Player img={Wiki} title="Wiki"/>
      <Player img={Rodolfo} title="Rodolfo"/>
      <Player img={Bigorna} title="Bigorna"/>
      
    </ul>
    </>
  )
}