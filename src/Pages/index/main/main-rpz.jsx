import React from 'react'
import "./main-rpz.css"
import { News } from "./news"
import { NovoSlide } from "./slide/NovoSlide"



export const Main = () => {

  return(
<>

    <h2>Últimas Notícias</h2> 

    <main>
      
      <NovoSlide />
      <News/>
      
      
     
    </main>
</>
  )
}