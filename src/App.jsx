import { useState } from "react";
import Cart from "./Cart";
import CartForm from "./CartForm";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <header>
        <h1>Ecommerce Cart</h1>
      </header>
      <div className="main">
        <CartForm setCounter={setCounter} />
        <Cart counter={counter} setCounter={setCounter} />
      </div>
      <footer className="footer">
        <p>
          This Site is developed by{" "}
          <a
            href="https://purnchndr.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Purnachndra
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
