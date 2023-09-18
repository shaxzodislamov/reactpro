import './Arxiv.css'
import Headers from "../Components/Headers";
import Poiskovik from "../Components/Poiskovik";
import Info from "../Components/Info";

const Arxiv = ()=>{
    return(
        <>
            <div className="head2">
                <Headers text = "Arxiv" btn_show = {false}/>
            <div className="select">
                <select>
                    <option value="">
                        Toshkent shaxar issiq suv
                    </option>
                    <option value="">
                        Toshkent viloyat issiq suv
                    </option>
                </select>
                <select>
                    <option value="">
                        2020-yil
                    </option>
                    <option value="">
                        2021-yil
                    </option>
                    <option value="">
                        2022-yil
                    </option>
                    <option value="">
                        2023-yil
                    </option>
                </select>
            </div>
            <div className="sear">
                <input type="text" placeholder="Qidirish"/>
                <div className="img2">
            <img src={require('../Icons/Search.png')} alt=""/>
                </div>
            </div>
            <div className="yozuv">
            <span>Jami:200</span>
            <span>To'lov:200 000 uzs</span>
            </div>

            <div className="royxat">
                    <div className="atribut">
                        <span id="first">#</span>
                        <span>Manzil</span>
                        <span>F.I.SH</span>
                        <span>Jo'natuvchi</span>
                        <span>Status</span>
                    </div>
                <Info/>
                <Info/>
                <Info/>
                <Info/>
                <Info/>
                <Info/>
                <Info/>
                <Info/>
                <Info/>
                <Info/>
                <Info/>
                <Info/>
                <Info/>

            </div>
            </div>

        </>
    )
}

export default Arxiv