import './Admin_qoshish.css'
import Headers from "../Components/Headers";
import Poiskovik from "../Components/Poiskovik";
import Adminadd from "../Components/Adminadd";

const Admin = ()=>{
    return(
        <>
            <Headers text = "Admin qoshish" btn_show = {false}/>
            <Poiskovik/>
            <Adminadd/>

        </>
    )
}

export default Admin