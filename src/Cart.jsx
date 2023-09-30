import { useEffect, useState } from "react";
import axios from "axios";
import Loder from "./Loder";

function Cart({ setCounter, counter }) {
  const [cart, setCart] = useState({ products: [] });
  const [loder, setLoder] = useState(false);

  useEffect(() => {
    async function getdata() {
      try {
        setLoder(true);
        const res = await axios.get(
          "https://proud-boa-raincoat.cyclic.cloud/cart"
        );
        const data = res.data;
        console.log(data);

        setCart(data);
      } catch (e) {
        console.error(e.message);
      } finally {
        setLoder(false);
      }
    }
    getdata();
  }, [counter]);

  async function clearCart() {
    try {
      setLoder(true);
      await axios
        .delete("https://proud-boa-raincoat.cyclic.cloud/cart")
        .then((res) => {
          if (res.status === 200) {
            setCart({ products: [] });
          }
        });
    } catch (e) {
      console.error(e.message);
      setLoder(false);
    } finally {
      setLoder(false);
    }
  }

  if (loder) return <Loder />;

  return (
    <section className="section">
      {cart.products.length > 0 ? (
        <>
          <div>
            <h1>Cart Items {counter} items</h1>
          </div>
          <div>
            <ul className="resul">
              {cart.products.map((curr, i) => {
                return (
                  <li className="resli" key={i}>
                    <p className="resname"> {`${curr.name} (${curr.id})`}</p>
                    <span>{`$${curr.price} Each`}</span>
                    <span>Quantity: {curr.quantity}</span>
                    <span>{`Total: $${curr.totalPrice} `}</span>
                    <span>{`Discount: $${curr.discount}`}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p>Cart Total: ${cart.cartTotal}</p>
            <p>Discount: ${cart.totalDiscount}</p>
            <p>Net Total: ${cart.finalPrice}</p>
          </div>
          <button onClick={clearCart}>Empty Cart</button>
        </>
      ) : (
        <p>Please Add items in the cart</p>
      )}
    </section>
  );
}

export default Cart;
