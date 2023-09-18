import './Headers.css'
import {hydrateRoot} from "react-dom/client";

const Head = (props)=>{
    return(
        <>
            <div className="Head">
                <p>{props.text}</p>
                <div className="head">
                    <img id="img" src={require('../Icons/Opovesheniye.png')} />

                        <button style={{ display: props.btn_show?"inline-block":"none"}} >Pdf file yuklash</button>
                        <button style={{ display: props.btn_show?"inline-block":"none"}}>Xml file yuklash</button>


                </div>
            </div>

        </>

    )
}

export default Head