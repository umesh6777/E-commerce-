import { useState } from "react";

const Login = () =>{
    let[msg,updateMsg]=useState("ENTER YOUR LOG IN DETIALS");
let[usename,pickUser]=useState("");
let[pass,pickPass]=useState("");

const goLogin=()=>{
    if (usename == "" || pass == ""){
        updateMsg("Empty Email or Password!");
    }
    else{
        updateMsg("Please wait Validating..");

        let url="http://localhost:1234/account?email="+usename+"&password="+pass;
       fetch(url)
       .then(response=>response.json())
       .then(userinfo=>{
       if (userinfo.length>0){
        updateMsg("SUCCESS : REDIRECTING....");
        localStorage.setItem("sellerid",userinfo[0].id);
        localStorage.setItem("adminname",userinfo[0].fullname);
        window.location.reload();// refresh the current page
       }else{
        updateMsg("FaIL : INVALID EMAIL OR PASSWORD");
       }
       })
    }
}
    return(
       <section className="container mt-5">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <p className="text-center text-danger">{msg}</p>
                    
                    <div className="card border-0 shadow-lg">
                       
                        <div className="card-header bg-primary text-white">
                            <i className="fa fa-lock"></i> Login
                        </div>

                        <div className="card-body">
                            <div className="mb-3">
                                <label>e-Mail Id</label>
                                <input type="text" className="form-control" onChange={obj=>pickUser(obj.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input type="password" className="form-control" onChange={obj=>pickPass(obj.target.value)}/>
                            </div>
                        </div>

                        <div className="card-footer text-center">
                            <button onClick={goLogin} className="btn btn-danger">
                                Login <i className="fa fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4"></div>
            </div>
       </section>
    )
}

export default Login;