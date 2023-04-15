import React, { useEffect, useState } from "react"
import Pagination from "./Pagination";
import "./Details.css"

import { Link } from "react-router-dom";
import EditForm from "./EditForm";
import { UserContext } from "../Context";
import { useContext } from "react";


export default function Details(){


let {data , setData , setEdit} = useContext(UserContext)
const [currentPage, setCurrentPage] = useState(1);
const [recordsPerPage] = useState(10);
const [select , setSelect] = useState([]);

const indexOfLastRecord = currentPage * recordsPerPage;//2*10//20
const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;//20-10

const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord)

const nPages = Math.ceil(data.length / recordsPerPage)

    useEffect(()=>{
         fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
         .then(res=>res.json())
         .then(d=>setData(d)) 
    },[])

  

    function DeleteFunc (ind){
      setData(data.filter(t=>t.id!==ind))
    }

    function EditFunc(ind){

    }

    return<>
    <input type="text" placeholder="Search by Name/Email/Role" id="search-input"></input>
    <table id="tabel-user">
        <tr>
        <th>Select</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
        </tr>
      
        {currentRecords.map((info)=>{
            return <>
                <tr>
                <td id="select-column" > <input type="checkbox" onClick={()=>setSelect({info})}></input></td>
                <td>{info.name}</td>
                <td>{info.email}</td>
                <td>{info.role}</td>
                <td id="icon-column">
                <Link to="/edit-form" ><img id="edit-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIcnFzEj5VainEnRAY2Y4P9UgZzfnx4aV7GHs-w7lSwiYSj6Rcc8t6NpTgFvYb4SH58dc&usqp=CAU" onClick={()=>setEdit(info)} /></Link>
                <img id="delete-icon" src="https://thumbs.dreamstime.com/b/computer-generated-illustration-recycle-bin-icon-isolated-white-background-suitable-logo-delete-icon-button-175612353.jpg"
                 onClick={()=>DeleteFunc(info.id)}/></td>
                </tr> 
            </>
        })}
        

    </table>

    <Pagination   nPages = { nPages }
    currentPage = { currentPage } 
    setCurrentPage = { setCurrentPage }
    select={select}
    setData={setData}
    data={data}
    />
    </>
}