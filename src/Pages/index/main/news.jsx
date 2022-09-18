import React from 'react'
import "./main-rpz.css"
import  BaladaP  from "./img/baladap.jpeg"
import  CamisaP  from "./img/camisap.jpeg"
import  ElencoP  from "./img/elencop.jpeg"
import Treino from "./img/treinorpz.jpeg"
import { Link } from "react-router-dom"

export const News = () => {

const Noticia = (props) => {
  return(
    <article className="news-noticias">
    <img src={props.img}/>
    <p>{props.title}</p>
  </article>
  )
}

  return (
    <section className="noticias">
      
      <Link to="/noticias/elenco-rpz">
          <Noticia img={ElencoP} title={"Elenco do RPZ pousa para foto após ser campeão"}/>
      </Link>

      <Link to="/noticias/camisa-rpz">
          <Noticia img={CamisaP} title={"Nova Camisa do RPZ"}/>
      </Link>
     
      <Link to="/noticias/treino-rpz">
          <Noticia img={Treino} title="Treino do RPZ" />
      </Link>

      <Link to="/noticias/balada-rpz">
          <Noticia img={BaladaP} title={"RPZ na balada"}/>
      </Link>
    </section>

  )
}