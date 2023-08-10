import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cart, setSearch, isLogIn,user}) => {
  return (
    <>
      <header className="App-header">
        <div style={{ margin: 0 }}>
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
       
          {!isLogIn ?<Link className="link__text" to="/login">Login</Link>: <Link className="link__text" to="/login">Welcome back, {user}</Link>}
          <Link style={{textDecoration: "none", color:"white"}} to="/cart">
            Cart
            <span>
              {cart.length ? <h2>{cart.length}</h2> : null}
            </span>
          </Link>

        
          
        </div>
      </header>
    </>
  );
};

export default Header;
