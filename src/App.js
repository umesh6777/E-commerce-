import UserApp from "./user/userapp";
import Adminapp from "./admin/adminapp";



function App() {

  if(localStorage.getItem("sellerid")==null)
{
  return (<UserApp/>)
}
else {
return(<Adminapp/>);
}
}

export default App;
