import './App.css';
import Add from './pages/Add';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/404';
import Menu from './components/Menu';
import Register from './pages/Register';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/add" element={<Add />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
