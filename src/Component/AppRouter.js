import { BrowserRouter, Route, Routes } from "react-router-dom"
import Details from "./Details"
import EditForm from "./EditForm"


export default function AppRouter(){
return<>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Details/>}/>
    <Route path="edit-form" element={<EditForm/>}/>
</Routes>
</BrowserRouter>
</>
}