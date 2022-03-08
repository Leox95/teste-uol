import './estiloInicio.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import firebase from '../../services/firebaseConnection'

function Inicio() {

  const [dados, setDados] = useState([])

  useEffect(() => {
    async function loadDados() {
      await firebase.firestore().collection('customers')
        .onSnapshot((doc) => {
          let meusDados = []
          doc.forEach((item) => {
            meusDados.push({
              id: item.id,
              name: item.data().name,
              email: item.data().email,
              phone: item.data().phone,
              status: item.data().status,
              cpf: item.data().cpf
            })
          })
          setDados(meusDados)
          console.log(dados)
        })
    }
    loadDados()
  }, [])

  async function excluir(id){
    await firebase.firestore().collection('customers').doc(id).delete()
  }

  return (
    <div className='containerInicio'>
      <div className='listagem'>
        <div>
          <h3>Listagem de usuários</h3>
          <p>Escolha um cliente para visualizar os detalhes</p>
        </div>
        <Link to="/cadastro" className='linkCadastro'>Novo Cliente</Link>
      </div>
      <div className="containerCard">
        {dados.map((dados) => {
          return (
            <div className='Card' key={dados.id}>
              <div className='info1'>
              <p>{dados.name}</p>
              <p>{dados.email}</p>
              </div>
              <div className='info2'>
              <p>{dados.cpf}</p>
              <p>{dados.phone}</p>
              </div>
              <p>{dados.status}</p>
              <button onClick={()=> excluir(dados.id)}className='excluir'>
                Excluir
                </button>
            </div>
          )
        })}
        <p>{`Exibindo ${dados.length} clientes`}</p>
      </div>
    </div>
  );
}

export default Inicio;