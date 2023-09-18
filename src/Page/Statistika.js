import '../Page/Statistika.css'
import Headers from "../Components/Headers";
import Poiskovik from "../Components/Poiskovik";
import Kurier_info from "../Components/Kurier_info";
import KartaAnim from "../Components/kartaAnim";
import Karta from "../Components/karta";

const Kurierlar = ()=>{
    return(
        <>
            <Headers text = "Statistika" btn_show = {false}/>
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
            <div className="card">
                <p className="cardp">Yanvar</p>
            <KartaAnim/>
            <Karta/>
            </div>
        </>
    )
}

export default Kurierlar