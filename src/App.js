import './App.css'
import {useState} from "react";
import Tashkilot from "./Page/Tashkilot";
import Kurierlar from "./Page/Kurierlar";
import Statistika from "./Page/Statistika";
import Tushumlar from './Page/Tushumlar'
import Arxiv from "./Page/Arxiv";
import Admin_qoshish from "./Page/Admin_qoshish";


    const App = ()=>{

        const [nav,setNav] = useState(1)
        const [name,setName] = useState("")
        const [surname,setSurname] = useState("")
        let submit = (e)=>{
                e.preventDefault()
                setName(e.target.name.value)
                setSurname(e.target.surname.value)
            console.log(name,surname)
        }
        let clear = ()=>{
            setName("")
            setSurname("")
        }

        return(
            <>
                <div className="navBar">
                    <div className="img">
                        <img src={require('./Icons/Logo.png')} alt=""/>
                    </div>
                    <h2>Super Admin</h2>
                    <ul>

                        <li onClick={()=>{setNav((e)=>1)}} className={nav == 1?'active1':""}><img src={ nav==1? require('./Icons/Tashkilot.png') :require('./Icons/tashkilotlogo.png')} alt=""/> <span>Tashkilotlar</span></li>
                        <li onClick={()=>{setNav((e)=>2)}} className={nav == 2?'active1':""}><img src={ nav==2? require('./Icons/kurieractivlogo.png') :require('./Icons/kurierlogo.png')} alt=""/> <span>Kurierlar</span></li>
                        <li onClick={()=>{setNav((e)=>3)}} className={nav == 3?'active1':""}><img src={ nav==3? require('./Icons/statistikaactivelogo.png') :require('./Icons/statistikalogo.png')} alt=""/><span>Statistika</span></li>
                        <li onClick={()=>{setNav((e)=>4)}} className={nav == 4?'active1':""}><img src={ nav==4? require('./Icons/tushumlaractive.png') :require('./Icons/tushumlarlogo.png')} alt=""/><span>Tushumlar</span></li>
                        <li onClick={()=>{setNav((e)=>5)}} className={nav == 5?'active1':""}><img src={ nav==5? require('./Icons/arxivactivelogo.png') :require('./Icons/arxivlogo.png')} alt=""/><span>Arxiv</span></li>
                        <li onClick={()=>{setNav((e)=>6)}} className={nav == 6?'active1':""}><img src={ nav==6? require('./Icons/adminqoshishactive.png') :require('./Icons/adminqoshishlogo.png')} alt=""/><span>Admin qo'shish</span></li>
                        <li id="chiqish"><img src={require('./Icons/chiqishlogo.png')} alt=""/><span>Chiqish</span></li>
                    </ul>
                </div>
                <div className="body">
                    <form onSubmit={submit}>
                        <input type="text"  name="name" onChange={(e)=>setName(e.target.value)} value={name}/>
                        <input type="text"  name="surname" onChange={(e)=>setSurname(e.target.value)} value={surname}/>
                        <button>Submit</button>
                        <button type="button" onClick={clear}> clear </button>
                    </form>
                    
                </div>
            </>
        )
    }
    export default App