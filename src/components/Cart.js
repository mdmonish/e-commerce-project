
function Cart({ cart, setCart,isLogIn,setLogIn }) {

  const handleClick = () => {
    if(isLogIn){
    alert("Order Placed");
    setCart([]);
    }
    else{
        alert('LoginRequired')
    }
  };
  const handleDelete = (item)=>{
    const newcart = cart.filter((val)=> val.id !== item);
    setCart(newcart)
  }
 

  var total = 0;
  cart.map((c) => {
    total = total + c.price;
  });
  return (
    <div>
      {cart.map((c) => (
        <div>
          <img src={c.image} alt="source not available"></img>
          <div key={c.id}>
            <h4>{c.title}</h4>
            <h5>Price:&nbsp;${c.price}</h5>
            <button onClick={()=>handleDelete(c.id)}>Remove Item</button>
          </div>
        </div>
      ))}
      {cart.length > 0 ? (
        <div>
          <button onClick={handleClick}>Place Order</button>
          <p>
            <b>Total:${total}</b>
          </p>
        </div>
      ) : (
        <div>
          <h2>Cart Is Empty</h2>
        </div>
      )}
    </div>
  );
}
export default Cart;
