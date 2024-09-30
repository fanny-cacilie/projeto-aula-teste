import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewClient() {
  const [client, setClient] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadClient();
  }, []);

  const loadClient = async () => {
    const result = await axios.get(`http://localhost:8080/client/${id}`);
    setClient(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"></h2>
          <div className="card">
            <div className="card-header">
            Informações do cliente com ID: {client.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Nome: </b>
                  {client.name}
                </li>
                <li className="list-group-item">
                  <b>E-mail: </b>
                  {client.email}
                </li>
                <li className="list-group-item">
                  <b>Telefone: </b>
                  {client.phone}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
}