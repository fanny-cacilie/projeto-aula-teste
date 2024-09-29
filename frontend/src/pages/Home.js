import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

    const [clients, setClients] = useState([])

    useEffect(()=> {
        loadClients();
    }, []);

    const loadClients = async () => {
        const result = await axios.get("http://localhost:8080/clients")
        setClients(result.data)
    }

  return (
    <div className="container">
      <div className="client-table">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">E-mail</th>
              <th scope="col">Telefone</th>
              <th scope="col">Modificar</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>   
                <td>
                    <button className="btn btn-primary mx-2">
                        Visualizar
                    </button>
                    <button className="btn btn-outline-primary mx-2">
                        Editar
                    </button>
                    <button className="btn btn-danger mx-2">
                        Deletar
                    </button>
                </td>              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
