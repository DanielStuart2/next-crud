"use client"
import { useEffect, useState } from "react"

export default function Home() {
 
  const [produtos, setProdutos] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:5000/produto`)
    .then(resp=> resp.json())
    .then(resp=> setProdutos(resp))
    .catch(error=> console.error(error))
  },[])

  const handleDelete = (id)=>{
    fetch(`http://localhost:5000/produto/${id}`)
    method: 'Delete'
  }
  
  return (
    <main>
      <h1>Lista de produtos</h1>
      
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            produtos.map(prod=>(
          <tr key={prod.id}>
            <td>{prod.titulo}</td>
            <td>{prod.quantidade}</td>
            <td>{prod.preco}</td>
            <td>
              <button onClick={handleDelete.bind(this, prod.id)}>Excluir</button>
            </td>
          </tr>
            ))}
        </tbody>
      </table>
    </main>
   
  )
}
