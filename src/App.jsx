import { useState } from "react";
import Cart from "./Cart";
import CartForm from "./CartForm";

function App() {
  const [id, setId] = useState("A");

  return (
    <div>
      <header>
        <h1>Ecommerce Cart</h1>
      </header>
      <div className="main">
        <CartForm setId={setId} />
        <Cart id={id} />
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
