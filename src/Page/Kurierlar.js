import '../Page/Kurierlar.css'
import Headers from "../Components/Headers";
import Poiskovik from "../Components/Poiskovik";
import Kurierlar_item from "../Components/kurierlar_item";
import Kurier_info from "../Components/Kurier_info";

const Kurierlar = ()=>{
    return(
        <>
            <Headers text = "Kurierlar" btn_show = {false}/>
            <Poiskovik/>
            <Kurier_info/>

        </>
    )
}

export default Kurierlar