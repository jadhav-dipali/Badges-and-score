import { createContext, useState } from "react"

export const UserContext = createContext();


export default function Context({children}){
    const [data, setData] = useState([]);
    const [edit , setEdit] = useState({})

  return<>
  <UserContext.Provider value={{data, setData,edit,setEdit}}>
     {children}
  </UserContext.Provider>
  </>
}