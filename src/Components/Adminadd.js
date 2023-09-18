import './Adminadd.css'

const add = ()=>{
    return(
        <>
            <div className="wind">
            <div className="window2">
                <h2>Ma'lumot O'zgartirish</h2>
                <div className="imgadd">
                    <img src={require('../Icons/Adminadd.png')} alt=""/>
                </div>

                <input type="text" />
                <input type="text" />
                <input type="password"/>
                <div className="chekbox1">
                    <span>Tashkilotlar</span>
                    <span>Kurierlar</span>
                    <span>Statistika</span>
                    <span>Tushumlar</span>
                    <span>Arxiv</span>
                    <span>Admin Qo'shish</span>
                <input id="one" type="checkbox"/>
                <input id="two" type="checkbox"/>
                <input id="three" type="checkbox"/>
                <input id="four" type="checkbox"/>
                <input id="five" type="checkbox"/>
                <input id="six" type="checkbox"/>
                </div>
                <div className="switch-field1">
                    <input type="radio" id="radio-three" name="switch-two" value="yes" checked/>
                    <label htmlFor="radio-three">Aktiv</label>
                    <input type="radio" id="radio-four" name="switch-two" value="maybe" />
                    <label htmlFor="radio-four">Noaktiv</label>
                </div>
                <button id="saqlash">Saqlash</button>

            </div>
            </div>
        </>
    )
}

export default add