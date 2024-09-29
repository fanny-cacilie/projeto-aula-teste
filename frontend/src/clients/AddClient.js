import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddClient() {
  let navigate = useNavigate()

  const [client, setClient] = useState({
    name:"",
    email:"",
    phone:""
  });

  const{name, email, phone} = client;

  const onInputChange = (e) => {
    setClient({...client, [e.target.name]:e.target.value});
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/client", client);
    navigate("/");
  };

  return (

    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Cadastrar Cliente</h2>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Digite o nome"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  E-mail
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Digite o e-mail"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Phone" className="form-label">
                  Telefone
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Digite o telefone"
                  name="phone"
                  value={phone}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Cadastrar
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/">
                Cancelar
              </Link>
            </form>
        </div>
      </div>
    </div>
  )
}
