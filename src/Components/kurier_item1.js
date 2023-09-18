import './kurier_item1.css'

const kurier  = ({children})=> {
    return (
        <>
            <div className={style.overlay}>
        <div className={style.modal}>
            {children}
        </div>
        </div>


</>
    )
}
export default kurier