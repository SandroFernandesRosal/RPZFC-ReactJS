import { DataSlide } from "./dataSlide"
import "./slide.css"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom"
import { useRef } from "react"

export const NovoSlide = () => {

  const Carousel = useRef(null)
  
    
  
  const prevSlide = (e) => {
     e.preventDefault();
    Carousel.current.scrollLeft -= Carousel.current.offsetWidth;
    
  }

  const nextSlide = (e) => {
    e.preventDefault(); 
    Carousel.current.scrollLeft += Carousel.current.offsetWidth;
    
  }


  return(
    <>
<div> 

<div className="container-slide" ref={Carousel}>


    {DataSlide.map((item, index) => {
      return(
        
     <Link to={item.Id}>

        <div key={index} className="item-slide">

          <img src={item.Img}/>
          <p>{item.Title}</p>
          
        </div>

        </Link>
      )
    })}
    
   

    </div>

    <div className="buttons-slide">
    <button onClick={prevSlide}><FaArrowLeft /></button>
    <button onClick={nextSlide}> <FaArrowRight /></button>
    </div>

    </div> 
    

</>
  )
}