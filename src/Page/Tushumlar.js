import '../Page/Tushumlar.css'
import Headers from "../Components/Headers";
import Poiskovik from "../Components/Poiskovik";
import Karta from "../Components/karta";

const Tushumlar = ()=>{
    return(
        <>
            <Headers text = "Tushumlar" btn_show = {false}/>
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
            <div className="kard">
                <p>Yanvar</p>
                <Karta/>
            </div>

        </>
    )
}

export default Tushumlar