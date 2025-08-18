import React, { useState } from "react";
import foodRecipe from '../assets/ffrr.jpg'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RecipeItem from "../components/RecipeItem";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import InputForm from "../components/InputForm";

export default function Home() {
    const navigate=useNavigate()
    const [isOpen,setIsOpen]=useState(false)

    const addRecipe=()=>{
        let token=localStorage.getItem("token")
        if(token)
         navigate("/addRecipe")
        else{
            setIsOpen(true)
        }
    }

    return(
        <>
        
           <section className="home">
               <div className="left">
                <h1>Food Recipe</h1>
                <h5>Food is more than just sustenance—it's a way to connect with culture, share moments with others, and express creativity. From comforting home-cooked meals to vibrant street food and elegant fine dining, food reflects the diversity and richness of human experience.</h5>
                <button onClick={addRecipe}>Share your recipe</button>
               </div>
               <div className="right">
                <img src={foodRecipe} width="275px" height="275px"></img>
               </div>
           </section>
           <div className="bg">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,32L40,32C80,32,160,32,240,64C320,96,400,160,480,165.3C560,171,640,117,720,128C800,139,880,213,960,245.3C1040,277,1120,267,1200,266.7C1280,267,1360,277,1400,282.7L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
           </div>
           { (isOpen) && <Modal onClose={()=>setIsOpen(false)}><InputForm setIsOpen={()=>setIsOpen(false)}/></Modal>}
           <div className="recipe">
              <RecipeItem/>
           </div>
          
        </>
    )
}