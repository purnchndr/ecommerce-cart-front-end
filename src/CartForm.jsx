import axios from "axios";
import Loder from "./Loder";
import { useState } from "react";

function CartForm({ setCounter }) {
  const ids = ["A", "B", "C", "D"];
  const [loder, setLoder] = useState(false);

  async function postData(id) {
    try {
      setLoder(true);
      await axios
        .post("https://proud-boa-raincoat.cyclic.cloud/cart", {
          item: {
            id,
            quantity: 1,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setCounter((curr) => curr + 1);
          }
        });
    } catch (e) {
      console.error(e.message);
      setLoder(false);
    } finally {
      setLoder(false);
    }
  }

  function handelAddToCart(index) {
    postData(ids[index]);
  }

  if (loder) return <Loder />;

  return (
    <section className="section">
      <div className="cartItem">
        <h3>Add Items to your Cart</h3>
        <ul className="products">
          <li className="proli">
            <div className="proicon">
              <p>Apple (A)</p>
              <span>$30.00</span>
            </div>
            <button onClick={() => handelAddToCart(0)}>Add to Cart</button>
          </li>
          <li className="proli">
            <div className="proicon">
              <p>Orange (B)</p>
              <span>$20.00</span>
            </div>
            <button onClick={() => handelAddToCart(1)}>Add to Cart</button>
          </li>
          <li className="proli">
            <div className="proicon">
              <p>Grapes (C)</p>
              <span>$50.00</span>
            </div>
            <button onClick={() => handelAddToCart(2)}>Add to Cart</button>
          </li>
          <li className="proli">
            <div className="proicon">
              <p>Mango (D)</p>
              <span>$15.00</span>
            </div>
            <button onClick={() => handelAddToCart(3)}>Add to Cart</button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default CartForm;
