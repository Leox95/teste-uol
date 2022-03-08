
import './estiloPainel.css'
import Avatar from '../../assets/avatar.png'


function Painel(){
    return(
    <div className='containerPainel'>
        <div className='painel'>
        <img className='avatar' src={Avatar} alt="Imagem avatar simples"/>
        <h1>Painel de clientes</h1>
        </div>
        <hr/>
    </div>
    )
}

export default Painel;