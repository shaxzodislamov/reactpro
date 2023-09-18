import './info.css'

const info = ()=>{
    return(
        <>
            <div className="fish">
                <span id="first1">1</span>
                <span>Chilonzor t.24-kvartal, 44/15</span>
                <span>Abduvaliyev Davron Normurodovich</span>
                <span>Toshkent shaxar issiq suv</span>
                <span>Topshirilgan</span>
                <div className="glaz">
                    <img src={require('../Icons/glaz.png')} alt=""/>
                </div>
            </div>
            <hr/>
        </>
    )
}
export default info