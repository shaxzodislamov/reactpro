import './Kurier_info.css'
import Karta from "./karta";
import KartaAnim from "./kartaAnim";
import Statistika from "./Statistika";
import Hisobkitob from "./Hisobkitob";
import Arxiv from "./Arxiv";
import {useState} from "react";
import Kurier from "./Kurier";
import Kurierlar_item from "./kurierlar_item";
import Kurierlar1 from '../Components/kurier_item1'
const K_info = (props)=>{

    const [tab,setTab] = useState(1)
    fetch('jdbc:mysql://localhost:3306')
        .then(response => response.json())
        .then(json => Statistika(json))
    return(
        <>
            <Kurierlar1 text = {props.text}/>
            <div className="all">
            <div className="nav">
            <ul>
                <li onClick={()=>{setTab(tab=>1)}} className={tab==1?'active':""}>Statistika</li>
                <li onClick={()=>{setTab(tab=>2)}} className={tab==2?'active':""}>Hisob kitob</li>
                <li onClick={()=>{setTab(tab=>3)}} className={tab==3?'active':""}>Arxiv</li>
            </ul>
            </div>
            <div id="nav-bar">
                {
                    tab == 1 &&
                    <div className="stastistika">
                        <Statistika/>
                    </div>
                }
                {
                    tab == 2 &&
                    <div className="hisobkitob">
                        <Hisobkitob/>
                    </div>
                }
                {
                    tab == 3 &&
                    <div className="arxiv">
                        <Arxiv/>
                    </div>
                }

            </div>
            </div>
        </>
    )
}

export default K_info