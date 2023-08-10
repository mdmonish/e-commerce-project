import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../actions/actions";
function Login({ isLogIn, setLogIn }) {
  let history = useNavigate();

  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  console.log("users", users);
  // const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const fetchUser = async () => {
  //     const base = "https://fakestoreapi.com/users";
  //     const response = await fetch(base);
  //     const data = await response.json();
  //     return data;
  //   };
  const checkUser = () => {
    const usercheck = users.find(
      (user) => user.email === email && user.password === password
    );
    if (!email || !password) {
      alert("Invalid details");
      return;
    }
    if (usercheck) {
      console.log("Login successful");
      setLogIn(true);
      history("/cart");
    } else {
      console.log("Wrong password or username");
    }
  };
  const logout = () => {
    setLogIn(false);
    history('/')
  };

  useEffect(() => {
    dispatch(fetchUsers());
    // fetchUser()
    //   .then((result) => {
    //     setUsers(result);
    //     console.log('users',users)
    //   })
    //   .catch((err) => console.log("error", err));
  }, [dispatch]);
  return (
    <div>
      {isLogIn ? (
        <div>
          <h2>Already loggedIn, Want to log out</h2>
          <button onClick={logout}>LogOut</button>
        </div>
      ) : (
        <div>
          <h2>Login Page</h2>
          <input
            style={{ padding: 6 }}
            type="email"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            style={{ padding: 6 }}
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={checkUser}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Login;
