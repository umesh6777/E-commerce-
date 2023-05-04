import { Link } from "react-router-dom";

const Adminheader = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-info  sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#"><i className="fa fa-shopping-bag fa-lg"></i> React Shopping App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto  mb-lg-0">

                        <li className="nav-item5 ps-5">
                            <Link className="nav-link text-white" to="/dashboard"><i className="fa fa-cogs"></i> DASHBOARD</Link>
                        </li>

                        <li className="nav-item ps-5">
                            <Link className="nav-link text-white" to="/order"><i className="fa fa-suitcase"></i> MY ORDER</Link>
                        </li>

                        <li className="nav-item ps-5">
                            <Link className="nav-link text-white" to="/product"><i className="fa fa-table"></i> ALL PRODUCT</Link>
                        </li>
                        
                        <li className="nav-item ps-5">
                            <Link className="nav-link text-white" to="/addproduct"><i className="fa fa-plus"></i> NEW PRODUCT</Link>
                        </li>
                        <li className="nav-item ps-5">
                            <a className="nav-link text-danger" onClick={Logout} to="/addproduct">WELCOME {localStorage.getItem('adminname')}<i className="fa fa-power-off ps-2"></i> LOGOUT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Adminheader;


const Logout=()=>{
    localStorage.clear();
    window.location.reload();
}