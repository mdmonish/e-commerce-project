import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../actions/actions";
function Login({ isLogIn, setLogIn,setUser }) {
  let history = useNavigate();

  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  // const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(false)
  // const fetchUser = async () => {
  //     const base = "https://fakestoreapi.com/users";
  //     const response = await fetch(base);
  //     const data = await response.json();
  //     return data;
  //   };
  const checkUser = () => {
    console.log(email,password)
    const usercheck = users.find(
      (user) => user.email === email && user.password === password
    );
    if (!email || !password) {
      setError(true);
      return;
    }
    if (usercheck) {
      setError(false)
      setLogIn(true);
      setUser(usercheck.username)
      history("/cart");
    } else {
      setError(true);
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
    <>
      {isLogIn ? (
        <div>
          <h2>Already loggedIn, Want to log out</h2>
          <button onClick={logout}>LogOut</button>
        </div>
      ) : (
        <div className="login__container">
          <h2>Login Page</h2>
          <div>
          {error && <div style={{color:"red",display:"flex"}}>*Please provide correct credentials.</div>}
          <input
            style={{ padding: 6,margin: "20px 0" }}
            type="email"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            style={{ padding: 6,margin: "20px 0"  }}
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          /></div>
          <div style={{display:"flex",marginBottom:"200px",justifyContent:"center"}}> <button style={{flexGrow:0.6,padding: "5px 27px",marginTop:10}}onClick={checkUser}>Login</button></div>
          <p>Disclaimer* email: john@gmail.com,
password: m38rmF$, </p></div>
        
      )}

      
    </>
  );
}

export default Login;
