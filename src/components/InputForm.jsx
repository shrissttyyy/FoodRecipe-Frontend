import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function InputForm({setIsOpen}) {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [isSignUp,setIsSignUp]=useState(false)
    const [error,setError]=useState("")
    const navigate = useNavigate();

    const handleOnSubmit=async(e)=>{
        e.preventDefault();
        let endpoint=(isSignUp) ? "signUp" : "login";
        try {
        const res = await axios.post(`http://localhost:5000/${endpoint}`,{email,password})
            localStorage.setItem("token",res.data.token)
            localStorage.setItem("user",JSON.stringify(res.data.user))
            if (setIsOpen) setIsOpen(false);
            navigate("/")
        } catch (err) {
          setError(err.response?.data?.error || "Something went wrong");
        }
    };

    return(
      <>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="form-control">
             <label>Email</label>
             <input type="email" className="input" onChange={(e)=>setEmail(e.target.value)} required/>
        </div>
        <div className="form-control">
             <label>Password</label>
             <input type="password" className="input" onChange={(e)=>setPassword(e.target.value)} required/>
        </div>
        <button type="submit">{(isSignUp) ? "Sign Up" : "Login"}</button><br></br>
        { (error!== "") && <h6 className="error">{error}</h6> }
        <p onClick={()=>setIsSignUp(pre=>!pre)}>{(isSignUp) ?"Already have an account" : "Create new account"}</p>
      </form>
      </>
    )
}