import React from 'react'
import "./noticias.css"
import { ItemNoticia } from "./item-noticia"
import  Elenco  from "../index/main/img/elenco-rpz.jpg"





export const ElencoRpz = () => {

 

  return(
    
    <ItemNoticia img={Elenco} title="Elenco do RPZ pousa para a foto antes do título" legend="Momento antes do RPZ conquistar a taça Libertadores do Ipase. RPZ venceu por 2x1 e levantou a taça."/>
        
  ) 
}