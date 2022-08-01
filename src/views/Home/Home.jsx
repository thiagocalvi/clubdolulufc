import { Link } from "react-router-dom"
import "./home.css"
export function Home(){
    return(
        <>
            <div className="container">
                <div className="discription">
                    <h2>Nos ajude nessa conquista</h2>
                    <h2>Seja um dos nossos patrocinadores</h2>
                    <button><Link className="link" to={'contact'}>Tornar-se um patrocinador</Link></button>
                </div>
                <div>
                    <h2>Interclasse, nossa obsessão.</h2>
                </div>
            </div>
        </>
    )
}