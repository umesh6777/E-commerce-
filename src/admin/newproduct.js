import { useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import data from '../json/data.json'



const  Newproduct=()=>{

    let[pname,pickName]=useState("");
    let[pprice,pickPrice]=useState("");
    let[pphoto,pickPhot]=useState("");
    let[pdetails,pickDetails]=useState("");
    const save = () =>{
        let sellerid = localStorage.getItem("sellerid");
        let url = "http://localhost:1234/product";
        let pinfo = { 
            "name": pname,
            "price": pprice,
            "photo": pphoto,
            "details": pdetails,
            "seller": sellerid
        };

        let postoption = {
            headers:{'Content-Type':'application/json'},
            method:"POST",
            body:JSON.stringify(pinfo)
        }
        fetch(url, postoption)
        .then(response =>response.json())
        .then(serverRes =>{
            toast(pname + " Save Successfully ...");
            pickName(""); 
            pickPrice(""); 
            pickPhot(""); 
            pickDetails("");
        })
    }
    return(
       <section className="container mt-4">
        <div className="row">
            <div className="col-lg-12 text-center mb-3">
                <h1 className="text-primary">ENTER NEW PRODUCT DETAILS</h1>
                <ToastContainer/>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3 text-center mb-3">
            </div>
            <div className="col-lg-6 text center mb-3">
            <div>
       <label>ENTER PRODUCT NAME</label>
       <input type="text" className="form-control"  onChange={obj=>pickName(obj.target.value)} value={pname}/>
 </div>
 <div className="mt-3">
       <label>ENTER PRICE UNIT</label>
       <input type="number" className="form-control" onChange={obj=>pickPrice(obj.target.value)}value={pprice}/>
 </div>
 <div className=" mt-3">
       <label>ENTER PHOTO URL</label>
       <input type="text" className="form-control" onChange={obj=>pickPhot(obj.target.value)} value={pphoto}/>
 </div>
 <div className=" mt-3">
       <label>ENTER PRODUCT DETAILS</label>
       <input type="text" className="form-control" onChange={obj=>pickDetails(obj.target.value)} value={pdetails}/>
 </div>
 <div className="text-center mt-3">
     <button onClick={save} className="btn btn-danger ">SAVE</button>
 </div>
       
       </div>
       <div className="col-lg-3 text center mb-3">
       
       </div>

        </div>

       </section>
    )
}

export default Newproduct;