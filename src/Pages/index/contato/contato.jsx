import React from 'react'
import "./contato.css"
import {FaFacebook, FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa"
import { useState } from "react"
import { useRef } from 'react';
import emailjs from "emailjs-com";

export const Contato = () => {

  const form = useRef();

 const [nameInput, setNameInput] = useState('')
 const [emailInput, setEmailInput] = useState('')
 const [assuntoInput, setAssuntoInput] = useState('')
 const [textInput, setTextInput] = useState('')

 const onSubmit = (e) => {
  e.preventDefault();

    emailjs.sendForm('gmailsfr', 'template_mumsd62', form.current, 'n_VePloj0wX6t-MH9')
      .then(() => {
          alert('Mensagem enviada com sucesso! :)');
      }, (error) => {
          alert(error.mensagem);
      });
      e.target.reset();
 }
 

 


  return (
  <>
  
    <h2 className="h2-contato">Entre em contato</h2>
    <section className="contato">
        
      <section className="social">
      
      <a href="https://api.whatsapp.com/send?phone=5521969501614" target="blank">
        <FaWhatsapp />
      </a>

      <a href="http://www.facebook.com/rpzfc" target="blank">
          <FaFacebook />
      </a>
      
      <a href="https://github.com/SandroFernandesRosal" target="blank">
          <FaGithub />
      </a>

      <a href="https://www.linkedin.com/in/sandro-fernandes-rosal-33365b240/" target="blank">
          <FaLinkedin />
      </a>
        
      </section>

      <form ref={form} onSubmit={onSubmit}  name="form">
        <input type="text" name="nome" id="nome" placeholder="Digite seu nome" value={nameInput} onChange={(e) => setNameInput(e.target.value)}  />

        <input type="email" name="email" id="email" placeholder="Digite seu email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)}/>

        <input type="text" name="assunto" id="assunto" placeholder="Digite o assunto" value={assuntoInput} onChange={(e) => setAssuntoInput(e.target.value)}/>

        <textarea name="mensagem" id="mensagem" cols="30" rows="10" placeholder="Digite sua mensagem" value={textInput} onChange={(e) => setTextInput(e.target.value)} ></textarea>

        <button type="submit" name="submit">Enviar</button>
      </form>
    </section>

    </>
  )
}