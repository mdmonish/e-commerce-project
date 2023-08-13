import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart, isLogIn, setLogIn }) {

  const history = useNavigate();
  const handleClick = () => {
    if (isLogIn) {
      alert("Order Placed");
      setCart([]);
    } else {
      console.log("")
      history("/login")
    }
  };
  const handleDelete = (item) => {
    const newcart = cart?.filter(val => val.id !== item);
    setCart(newcart);
  };

  let total = 0;
 for(let i=0;i<cart.length;i++){
  total+=cart[i].price;
 }

  return (
    <div className="cart__container">
      <h2>{cart.length ? `My Cart(${cart.length})` : "Your Cart Is Empty"}</h2>
      <div className="cart__list">
        {cart?.map(c => (
          <div className="item__container" key={c.id}>
            <img
              className="cart__image"
              src={c.image}
              alt="source not available"
            ></img>
            <div style={{ flexGrow: 1 }} key={c.id}>
              <h4 style={{ marginBottom: 0 }}>{c.title}</h4>
              <p style={{ marginTop: 0 }}>Rating: {c.rating?.rate}</p>
              <div className="item__dlt_container">
                <button onClick={() => handleDelete(c.id)}>🗑</button>
                <h5>Price:&nbsp;$ {c.price}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="order__total-container">
          <button className="order__btn" onClick={handleClick}>
            Place Order
          </button>
          <p style={{ margin: 0 }}>
            <b>Total:$ {parseFloat(total).toFixed(2)}</b>
          </p>
        </div>
      )}
    </div>
  );
}
export default Cart;
