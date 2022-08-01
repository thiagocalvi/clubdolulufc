import { Link } from "react-router-dom";
import "./header.css"

export function Header(){
    return(
        <>
            <header className="header">
                <div className="logo">
                    <img src="https://club-do-lulu.web.app/escudoclub.jpg"/>
                    <h1>Club do Lulu Fc</h1>
                </div>
                <div className="nav">
                    {/* <nav className="navLink">
                        <Link className="link" to={'/'}>Home</Link>
                        <Link className="link" to={'about'}>Sobre</Link>
                        <Link className="link" to={'contact'}>Contato</Link>
                    </nav> */}
                </div>
            </header>
        </>
    )
}