import "./noticias.css"
import { ItemNoticia } from "./item-noticia"
import  Camisa  from "../index/main/img/Camisa-rpz.jpeg"

export const CamisaRpz = () => {

  return(
    
    <ItemNoticia img={Camisa} title="Nova Camisa do RPZ" legend="RPZ lança camisa nova para a temporada. Existe a espectativa para que seja lançada a camisa 2 ainda esse mês."/>
    
  ) 
}