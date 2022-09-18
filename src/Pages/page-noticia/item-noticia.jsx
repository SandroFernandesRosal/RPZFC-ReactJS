import React from 'react'

export const ItemNoticia = (props) => {

    return(
    <div className="container-noticia">
    <figure>
      <h1>{props.title}</h1>
      <img src={props.img} alt={props.title}/>
      <figcaption>{props.legend}</figcaption>
      
    </figure>
  </div>
  )
 
}