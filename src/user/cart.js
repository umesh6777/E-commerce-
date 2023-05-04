import { useState, useEffect } from "react";
const Mycart = () =>{
    let[allproduct, updateProduct] = useState( [] );
    const getProduct = () =>{
        fetch("http://localhost:1234/cart")
        .then(response =>response.json())
        .then(productArray =>{
            updateProduct(productArray);
        })
    }

    useEffect(()=>{
        getProduct();
    }, [1] );
    let total = 0;

    const one = (pid, product, action) =>{
            if(action==="B"){
                product["qty"] = product.qty - 1;
            }else{
                product["qty"] = product.qty + 1;
            }

            if(product.qty >0){
                let url = "http://localhost:1234/cart/"+pid;
                let postOption = {
                    headers:{'Content-Type':'application/json'},
                    method:"PUT",
                    body:JSON.stringify(product)
                }
                fetch(url, postOption)
                .then(response=>response.json())
                .then(serverRes=>{
                    getProduct();
                })
            }else{
                deleteCart(pid)
            }
        }

        const deleteCart = (pid) =>{
            let url = "http://localhost:1234/cart/"+pid;
            let postOption = { method:"DELETE" };
            fetch(url, postOption)
            .then(response=>response.json())
            .then(serverres=>{
                getProduct(); // reload the list
            })
        }

        // order place code start here
        let[fullname, pickName] = useState("");
        let[mobile, pickMobile] = useState("");
        let[email, pickEmail] = useState("");
        let[address, pickAddress] = useState("");

        const save = () =>{
            let url = "http://localhost:1234/order/";
            let orderData = {
                customername:fullname, 
                mobile:mobile, 
                email:email, 
                address:address,
                orderitem:allproduct
            };
            let postOption = {
                headers:{'Content-Type':'application/json'},
                method:"POST",
                body:JSON.stringify(orderData)
            };
            fetch(url, postOption)
            .then(response=>response.json())
            .then(serverRes=>{
                alert("Order Received, Order id-: "+ serverRes.id)
            })
        }

    return(
        <section className="container mt-4">
            <div className="row">
                <div className="col-lg-4">
                    <div className="card border-0 shadow-lg mt-4">
                        <div className="card-header bg-primary text-white"> Customer Details </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label>Customer Name</label>
                                <input type="text" className="form-control"
                                onChange={obj=>pickName(obj.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label>Mobile No</label>
                                <input type="text" className="form-control"
                                onChange={obj=>pickMobile(obj.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label>e-Mail Id</label>
                                <input type="text" className="form-control"
                                onChange={obj=>pickEmail(obj.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label>Delivery Address</label>
                                <textarea className="form-control" 
                                onChange={obj=>pickAddress(obj.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-warning" onClick={save}>Place Order</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <h3 className="text-center text-primary">{allproduct.length} : Items in Cart </h3>
                    <table className="table table-bordered mt-4">
                        <thead>
                            <tr className="bg-light text-primary">
                                <th>Sl No</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                       <tbody>
                            {
                                allproduct.map((product, index)=>{
                                    total = total + product.qty * product.price;
                                    return(
                                        <tr key={index}>
                                            <td> {product.id} </td>
                                            <td> {product.name} </td>
                                            <td> {product.price} </td>
                                            <td>
                                                <div className="input-group">
                                                    <button className="btn btn-info" 
                                                    onClick={one.bind(this, product.id, product, "A")}>+</button>

                                                    <input type="text" className="form-control"
                                                    value={product.qty}/>

                                                    <button className="btn btn-warning"
                                                    onClick={one.bind(this, product.id, product, "B")}>-</button>
                                                </div>
                                            </td>
                                            <td> {product.qty * product.price} </td>

                                            <td>  
                                                <button className="btn btn-danger btn-sm" 
                                                    onClick={deleteCart.bind(this, product.id)}>Remove
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            <tr>
                                <td> SGST - {total * 9 /100} </td>
                                <td> CGST - {total * 9 /100} </td>
                                <td colSpan="2"> GST Amount - { (total * 9 /100) + (total * 9 /100) } </td>
                                <td colSpan="2">
                                Rs. {total}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center" colSpan="6">
                                     { total + (total * 18 /100)} : Total Amount to Pay 
                                </td>
                            </tr>
                       </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Mycart;

/*
    fetch data from cart api and display in cart page 
    Note 
        cart page 
            row
                ->5  -> empty 
                ->7
                    ->display cart item in table format

*/