import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"

const router = (
   <BrowserRouter>
        <Routes>
            <Route path="/dashboard" exact element={<Home/>}/>
            <Route path="/login" exact element={<Login/>} />
            <Route path="/signup" exact element={<SignUp/>}/>
        </Routes>
   </BrowserRouter> 
)

const App = () => {
    return (
        <div>
            {router}
        </div>
    )
}

export default App;