import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Header } from "./header/header"
import{ Footer } from "./footer/footer"
import { Home } from './Pages/index/home'
import{ Elenco } from "./Pages/elenco/elenco"
import{ Titulos } from "./Pages/titulos/titulos"
import{ Historia } from "./Pages/historia/historia"
import{ Fotos } from "./Pages/fotos/fotos"
import { ElencoRpz } from "./Pages/page-noticia/elencoRpz"
import { BaladaRpz } from "./Pages/page-noticia/balada-rpz"
import { CamisaRpz } from "./Pages/page-noticia/camisa-rpz"
import { TreinoRpz } from "./Pages/page-noticia/treino-rpz"





export const Rotas = () => {

  return(

    <BrowserRouter basename="/">
      <Header />
      <Routes>
      <Route element = {<Home />}  path="/" exact />
      <Route element = {<Elenco />}  path="/elenco" />
      <Route element = {<Titulos />}  path="/titulos" />
      <Route element = {<Historia />}  path="/historia" />
      <Route element = {<Fotos />}  path="/fotos" />
      <Route element = {<ElencoRpz />}  path="/noticias/elenco-rpz" />
      <Route element = {<CamisaRpz />}  path="/noticias/camisa-rpz" />
      <Route element = {<TreinoRpz />}  path="/treino-rpz" />
      <Route element = {<BaladaRpz />}  path="/balada-rpz" />
     
      
      </Routes>
      <Footer />

     </BrowserRouter>
  )
}