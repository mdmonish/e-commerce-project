import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Home({ search, addToCart }) {
  const prod = useSelector(state => state.prod.product);
  const [filters,setFilters] = useState([]);

  useEffect(()=>{
    const filtered = prod.filter(item=> item.title.toLowerCase().includes(search.toLowerCase()))
   
    setFilters(filtered);
  },[prod,search]);

  return (
    <div
     className="home__container"
    >
      {filters
        ?.map(item => (
          <div
            style={{  }}
            className="prod__container"
            key={item.id}
          >
            <img
              className="prod__image"
              src={item.image}
              alt="source not available"
            ></img>
            <h3>{item.title}</h3>
            <div clasName="prod__price__container">
              <h4>$&nbsp;{item.price}</h4>
              <button className="add__btn" onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Home;
