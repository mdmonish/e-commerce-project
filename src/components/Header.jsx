import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cart, setSearch, isLogIn }) => {
  return (
    <>
      <header
        className="App-header"
      >
      <div>
        <Link className="link" to="/">
          MeriDukan
        </Link>
        </div>
        <div className="search__input">
        <input
          type="text"
          placeholder="Search here"
          onChange={e => {
            setSearch(e.target.value);
          }}
        />
        </div>
        <div className="action__container">
        
          <Link to="/login">
            <button id="cart">
              {!isLogIn ? <p>Login</p> : <p>LoggedIn</p>}
            </button>
          </Link>
          
          
          <Link to="/cart">
            <button id="cart">Cart<span style={{ marginTop: 10 }}>
            10
            {/* {cart.length ? <h2>{cart.length}</h2> : null} */}
          </span></button>
          </Link>
          
        </div>
      </header>
    </>
  );
};

export default Header;
