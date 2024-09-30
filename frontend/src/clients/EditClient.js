import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditClient() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [client, setClient] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { name, email, phone } = client;

  const onInputChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadClient();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/client/${id}`, client);
    navigate("/");
  };

  const loadClient = async () => {
    const result = await axios.get(`http://localhost:8080/client/${id}`);
    setClient(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Client</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Nome
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
              <div className="mb-3">
              <label htmlFor="phone" className="form-label">
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
            </div>
            <button type="submit" className="btn btn-outline-success">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}