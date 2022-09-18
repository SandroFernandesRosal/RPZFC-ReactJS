import React from 'react'
import "./fotos.css"
import Img1 from "./img/01.jpeg"
import Img2 from "./img/02.jpeg"
import Img3 from "./img/03.jpeg"
import Img4 from "./img/04.jpeg"
import Img5 from "./img/05.jpeg"
import Img6 from "./img/06.jpg"
import Img7 from "./img/07.jpeg"

export const Fotos = () => {

  return(
    <>
    <h2>Fotos</h2>
    <ul className="fotos">
      <li><img src={Img1}/></li>
      <li><img src={Img2}/></li>
      <li><img src={Img3}/></li>
      <li><img src={Img4}/></li>
      <li><img src={Img5}/></li>
      <li><img src={Img6}/></li>
      <li><img src={Img7}/></li>
    </ul>
    </>
  )
}