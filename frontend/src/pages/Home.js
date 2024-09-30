import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Home() {

    const [clients, setClients] = useState([])

    useEffect(()=> {
        loadClients();
    }, []);

    const loadClients = async () => {
        const result = await axios.get("http://localhost:8080/clients")
        setClients(result.data)
    }

    const deleteClient = async (id) => {
      await axios.delete(`http://localhost:8080/client/${id}`);
      loadClients();
    };

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
              <th scope="col"></th>
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
                <Link
                    className="btn btn-primary mx-2"
                    to={`/viewClient/${client.id}`}
                  >
                    Visualizar
                  </Link>
                  <Link
                    className="btn btn-success mx-2"
                    to={`/editClient/${client.id}`}
                  >
                    Editar
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteClient(client.id)}
                  >
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
