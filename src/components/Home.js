import { useSelector } from "react-redux";
import "./home.css";

function Home({ search,addToCart }) {
  const prod = useSelector(state=>state.prod.product)
  return (
    <div style={{ display: "flex", flexFlow: "wrap", marginLeft: 80 }}>
      <>
        {prod
          .filter((item) => {
            if (item.title.toLowerCase().includes(search.toLowerCase()))
              return item;
          })
          .map((item) => (
            <div className="container" key={item.id}>
              <img src={item.image} alt="source not available"></img>
              <div style={{height: 40}}><h5>{item.title}</h5></div>
              <h6>$&nbsp;{item.price}</h6>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
      </>
    </div>
  );
}

export default Home;
