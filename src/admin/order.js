import { useEffect,useState } from "react";

const  Myorder=()=>{
    
    let [allorder,updateOrder]=useState([]);

   
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
        getOrder();
     
    },[1]);
    return(
        <section className="container mt-4">
        <div className="row">
            <div className="col-lg-12">
                <h3 className="text-center">
                    {allorder.length}:Order Management
                </h3>
            </div>
        </div>
        {
            allorder.map((order,index)=>{
                return(
                    <div className="row mb-5" key={index}>
                        <div className="col-lg-3">
                            <div className="p-3 border">
                            <p>{order.customername}</p>
                            <p>{order.mobile}</p>
                            <p>{order.email}</p>
                            <p>{order.address}</p>

                            </div>
                        </div>
                        <div className="col-lg-9">
                            <h5 className="text-center mb-3">Order item</h5>
                                <table className="table">
                                    <thead>
                                        <tr>
                                    <th>Product Id</th>
                                    <th>NAME</th>
                                    <th>PRICE</th>
                                    <th>Quantity</th>
                                    <th>TotalPrice</th>
                                    <th>Photo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      {
                                        order.orderitem.map((orderinfo,index2)=>{
  if (orderinfo.seller==localStorage.getItem("sellerid"))
return(
    <tr key={index2}>
    <th>{orderinfo.id}</th>
    <th>{orderinfo.name}</th>
    <th>{orderinfo.price}</th>
    <th>{orderinfo.qty}</th>
    <th>{orderinfo.price*orderinfo.qty}</th>
    <th>
        <img src={orderinfo.photo} height="50" width="50"/>
    </th>

                                  </tr>
)
                                        })
                                      }
                                    </tbody>
                                </table>
                            
                            
                        </div>
                    </div>
                )
            })
        }
        </section>
    )
}

export default Myorder;