import { useState,useEffect } from "react";
import { ToastContainer,toast } from "react-toastify";


const  Myproduct=()=>{
    let[allproduct,updateProduct]=useState([]);

    const getProduct=()=>{
        let sellerid = localStorage.getItem("sellerid");
        let url = "http://localhost:1234/product?seller="+sellerid;
        fetch(url)
        .then(response=>response.json())
        .then(productArray=>{
            updateProduct(productArray.reverse());
        })
    }
    useEffect(()=>{
        getProduct();
    },[1]);
    let[keyword,updatekeyword]=useState("");
    return(
        <section className="container">
   
        <div className="row">
        <div className="col-lg-12 text-center">
            <h1>PRODUCT LIST :{allproduct.length}</h1>
            <div className='row mb-4'>
                <div className='col-lg-4'>
                    
                    </div>
                    <div className='col-lg-4'>
                        <input type="text" className="form-control " placeholder="SEARCH HERE" onChange={obj=>updatekeyword(obj.target.value)} value={keyword}/>
                    
                    </div>
                    <div className='col-lg-4'>
                    
                    </div>
                    
                </div>
            <table className="table table-bordered  shadow-lg mt-4">
                <thead>
                    <tr className="bg-light text-primary">
                        <th>ID</th>
                        <th>PRODUCT NAME</th>
                        <th>PRICE</th>
                        <th>DETAILS</th>
                        <th>PHOTO</th>
                        <th>ACTION</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            allproduct.filter(post =>{if(post.name.toLowerCase().includes(keyword.toLowerCase()) )
                                {
                                         return post;
                                }
                               }).map((pro,index)=>{
                               return(
                                <tr key={index}>
                                    <td>{pro.id}</td>
                                    <td>{pro.name}</td>
                                    <td>{pro.price}</td>
                                    <td>{pro.details}</td>
                                    <td><img src={pro.photo} height="50" width="50"/></td>
                 <td><button className="btn btn-danger btn-sm">
                    <i className="fa fa-trash"></i></button></td>

                                </tr>
                               )
                            })
                        }
                    </tbody>
            </table>
            </div>
        </div>
        </section>
    )
}

export default Myproduct;