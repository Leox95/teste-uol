import './estiloHeader.css'
import SimboloUOL from '../../assets/simboloUol.png'


function Header(){
    return(
    <header>
        <img className='simbolo' src={SimboloUOL} alt="Imagem simbolo da Uol"/>
    </header>
    )
}


export default Header;