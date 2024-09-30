import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddClient from './clients/AddClient';
import EditClient from './clients/EditClient';
import ViewClient from './clients/ViewClient';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <h2>Dados de Clientes</h2>
        </div>
        <br>
        </br>
        <Routes>
          <Route exact path ="/" element={<Home />} />
          <Route exact path ="/addClient" element={<AddClient />} />
          <Route exact path="/editCLient/:id" element={<EditClient />} />
          <Route exact path="/viewClient/:id" element={<ViewClient />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
