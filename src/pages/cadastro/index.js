import './estiloCadastro.css'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import firebase from '../../services/firebaseConnection'

function Cadastro() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState('Active')

  async function Cadastrar(){
    await firebase.firestore().collection('customers')
    .add({
      name: name,
      phone: phone,
      cpf: cpf,
      email: email,
      status: status
    })
    .then(()=>{
      alert('Cadastrado com Sucesso')
    setName('')
    setEmail('')
    setCpf('')
    setPhone('')
    setStatus('')
    })
    .catch(()=>{
      alert('Algo deu errado')
    })
  }



  return (
    <div className='containerCadastro'>
      <div className='descricaoCadastro'>
        <h4>Novo usuário</h4>
        <p>Informe os campos a seguir para criar novo usuario</p>
      </div>
      <div className='containerInput'>
        <input placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder='CPF' value={cpf} onChange={(e) => setCpf(e.target.value)} />
        <input placeholder='Telefone' value={phone} onChange={(e) => setPhone(e.target.value)} />
        <select  name="select" value={status} onChange={(e)=> setStatus(e.target.value)}>
          <option value="Active">Active</option>
          <option value="Inactive" >Inactive</option>
          <option value="Disabled">Disabled</option>
          <option value="Waiting">Waiting</option>
        </select>
        <div >
          <button onClick={Cadastrar} className='btnCriar'>Cadastrar</button>
          <Link className='btnVoltar' to='/'>Voltar</Link>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;