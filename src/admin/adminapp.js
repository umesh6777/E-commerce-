import { HashRouter,Routes,Route } from "react-router-dom";
import Adminheader from "./adminheader";
import Mydashboard from "./dashboard";
import Myorder from "./order";
import Myproduct from "./product";
import Newproduct from "./newproduct";

const Adminapp=()=>{
    return(
        <HashRouter>
        <Adminheader/>

        <Routes>
            <Route exact path="/order" element={<Myorder/>} />
            <Route exact path="/product" element={<Myproduct/>} />
            <Route exact path="/addproduct" element={<Newproduct/>} />
            <Route exact path="/dashboard" element={<Mydashboard/>} />     
        </Routes>
    </HashRouter>
    )
}

export default Adminapp;