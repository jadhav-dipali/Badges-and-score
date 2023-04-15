import React, { useState } from "react"
import "./Pagination.css"

export default function Pagination({nPages,currentPage, setCurrentPage}){
    const pageNumbers = [...Array(nPages+1).keys()].slice(1);
    const nextPage = () => {
        if(currentPage !== nPages) 
            setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) 
            setCurrentPage(currentPage - 1)
    }

    return<>
      <button id="delete-all-select">Delete Selected</button>
    <nav id="nav-container">
   
        <ul>
            <li><a href="#" onClick={prevPage}>Prev</a></li>
        
        {
            pageNumbers.map((pageNo,ind)=>(
                <li key={ind}>
                    <a href="#" onClick={()=>setCurrentPage(pageNo)}>{pageNo}</a>
                </li>
            ))
        }
        <li>
        <li><a href="#" onClick={nextPage}>Next</a></li> 
        </li>
        </ul>
       
    </nav>
    </>
}