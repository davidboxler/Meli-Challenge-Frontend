import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/Logo_ML.png';
import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");

  const updateInput = (e) => {
    setSearchInput(e.target.value);
  };

  const searchData = (e) => {
    e.preventDefault();
    if (window.location.href.includes("search")) {
      navigate(`/items?search=${searchInput}`);
    } else {
      navigate(`/items?search=${searchInput}`);
    }
  };

  return (
    <nav className="nav-navbar">
      <div className="main-container">
        <div className="navbar-search-container">
          <Link to="/">
            <img className="header-logo" src={logo} alt="Logo de Mercado Libre" />
          </Link>
          <form className="search-input-container" noValidate autoComplete="off" onSubmit={searchData}>
            <input className="search-input" type="text" placeholder="Nunca dejes de buscar" onChange={updateInput} />
            <button className="search-icon" type="submit">
              <AiOutlineSearch />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;