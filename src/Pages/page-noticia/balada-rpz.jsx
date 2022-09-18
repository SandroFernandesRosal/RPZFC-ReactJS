import React from 'react'
import "./noticias.css"
import { ItemNoticia } from "./item-noticia"
import  Balada  from "../index/main/img/balada.jpeg"

export const BaladaRpz = () => {

  return(
    <ItemNoticia img={Balada} title="Craques são vistos na balada" legend="Parte do elenco foi visto na balada no Rio de Janeiro, comemorando aniversário do Léo Nariz"/>
  ) 
}