import React from 'react'
import "./noticias.css"
import { ItemNoticia } from "./item-noticia"
import  Treino from "../index/main/img/treinorpz.jpeg"

export const TreinoRpz = () => {

  return(
    <ItemNoticia img={Treino} title="Mais um dia de treino pesado" legend="RPZ treina forte para o começo da temporada. Técnico acredita em mais um ano de glória."/>
  ) 
}