import { useEffect,useState } from "react";

const  Mydashboard=()=>{
    let [allproduct,updateProduct]=useState([]);
    let [allorder,updateOrder]=useState([]);
    const getProduct=()=>{
        let sellerid = localStorage.getItem("sellerid");
        let url = "http://localhost:1234/product?seller="+sellerid;
        fetch(url)
        .then(response=>response.json())
        .then(productArray=>{
            updateProduct(productArray.reverse());
        })
    }
   
    const getOrder=()=>{
        let sellerid = localStorage.getItem("sellerid");
        let url = "http://localhost:1234/order";
        fetch(url)
        .then(response=>response.json())
        .then(productArray=>{
            updateOrder(productArray.reverse());
        })
    }
    useEffect(()=>{
        getProduct();
        getOrder();
     
    },[1]);
 
    return(
        <section className="container">
     <div className="row text-center">
        <div className="col-lg-12">
            <h1>SELLER DASHBOARD</h1>
        </div>
     </div>
     <div className="row text-center mt-5">
     <div className="col-lg-3"></div>
     <div className="col-lg-3">
        <i className="fa fa-suitcase fa-3x text-info mb-3"></i> 
        <h2>{allproduct.length}-Total Product</h2>
     </div>
     <div className="col-lg-3">
     <i className="fa fa-headset fa-3x text-warning mb-3"></i> 
        <h2>{allorder.length}- Total Order</h2>
     </div>
     </div>
        </section>
    )
}

export default Mydashboard;