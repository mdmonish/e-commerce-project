import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Login from "./components/Login";
import {fetchProduct} from './actions/actions'
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  // const [prod, setProd] = useState([]);
  const [isLogIn, setLogIn] = useState(false);
  

  // const fetchProd = async () => {
  //   const base = "https://fakestoreapi.com/products";
  //   const response = await fetch(base);
  //   const data = await response.json();
  //   return data;
  // };

  useEffect(() => {
    dispatch(fetchProduct());
    // fetchProd()
    //   .then((result) => {
    //     setProd(result);
    //   })
    //   .catch((err) => console.log("error", err));
  }, [dispatch]);

  const addToCart = (item) => {
    let index = cart.find((val) => val.id === item.id);
    if (!index) {
      setCart([...cart, item]);
    } else {
      alert("Already In Cart");
    }
  };

  return (
    <Router>
      <div className="App">
  <Header setSearch={setSearch} cart={cart} isLogIn={isLogIn}/>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                search={search}
                addToCart={addToCart}
                isLogIn={isLogIn}
                setLogIn={setLogIn}
              />
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                isLogIn={isLogIn}
                setLogIn={setLogIn}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <Login
                isLogIn={isLogIn}
                setLogIn={setLogIn}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
