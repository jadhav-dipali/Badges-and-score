
import React, { useContext, useState } from "react"
import "./EditForm.css"
import { UserContext } from "../Context"
import { Navigate, useNavigate } from "react-router-dom";


export default function EditForm(){
   const {edit , setEdit, setData,data} = useContext(UserContext)

const Navigater = useNavigate();
    function formSubmit(e){
    e.preventDefault();
    
    fetch(`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json/${edit.id}`, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(edit),
        }).then(res=>res.json())
        .then(data=>{
            setData(data);
        })

    console.log(edit)
    
     Navigater(-1)
    }

    return<>
    <h1><i>Edit Form</i></h1>
    <form onSubmit={formSubmit}>
        <label>Name</label><br />
        <input type="text"  name="name" onChange={(e)=>setEdit({...edit,name:e.target.value})}  value={edit.name} ></input><br />
        <label>Email</label><br />
        <input type="email"  name="email" onChange={(e)=>setEdit({...edit,email:e.target.value})}  value={edit.email}></input><br />
        <label>Role</label><br />
        <input type="text"  name="role" onChange={(e)=>setEdit({...edit,role:e.target.value})}  value={edit.role}></input><br />
       <div id="btn-container"><button>Edit</button></div> 
    </form>
    </>
}