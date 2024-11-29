import React from "react"; 
import ReactDOM from "react-dom/client" ;
import "./index.css";

 
function App() {
    return (
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    );
  }

  function Header() {
    return (
        <header>
            <h1 
                style={{ color: "orange", fontSize: "48px", textTransform: "uppercase" }}>
                Ervian's Pizza Co.
            </h1>
            <h2 
                style={{ 
                    color: "black", 
                    fontSize: "24px", 
                    textAlign: "center", 
                    marginTop: "10px", 
                    fontWeight: "300" 
                }}>
              Authentic Italian Cuisine
            </h2>
        </header>
    );
}

function Footer() {
    const currentHour = new Date().getHours();
    const isOpen = currentHour >= 10 && currentHour < 22; // Open from 10am to 10pm
    return (
        <div className="footer">
            <footer>
                {isOpen ? "We're currently open" : "Sorry, we're closed"}
            </footer>
            <button className="btn">
                    {isOpen ? "Order Now" : "Come Back Tomorrow"}
            </button>
            <div className="social-links">
                <img src="facebook.png" alt="Facebook" className="social-icon" />
                <img src="instagram.png" alt="Instagram" className="social-icon" />
                <img src="X.png" alt="Twitter" className="social-icon" />
            </div>
        </div>
    );
}

function Pizza({ image, name, description, price, stock }) {
  return (
    <div className="pizza-card">
      <img src={image} alt={name} className="pizza-image" />
      <div className="pizza-details">
        <h3 className="pizza-name">{name}</h3>
        <p className="pizza-description">{description}</p>
        <p className="pizza-price">${price}</p>
        <p className="pizza-stock">{stock > 0 ? "In Stock" : "Sold Out"}</p>
        <p className="pizza-discount">{stock > 0 && stock < 5 ? `Hurry! Save 10% on Only ${stock} left!` : ""}</p>
      </div>
    </div>
  );
}

function Menu() {
  const pizzas = [
    { image: "pizzas/spinaci.jpg", name: "Spinach Pizza", description: "Tomato, mozzarella, spinach, and ricotta cheese", price: 10, stock: 10 },
    { image: "pizzas/margherita.jpg", name: "Margarita Pizza", description: "Tomato, mozzarella, and basil", price: 12, stock: 5 },
    { image: "pizzas/salamino.jpg", name: "Pepperoni Pizza", description: "Pepperoni, sausage, bacon, and ham", price: 18, stock: 3 },
    { image: "pizzas/funghi.jpg", name: "Mushroom Pizza", description: "Mushroom, mozzarella, garlic, and ham", price: 15, stock: 0 },
    { image: "pizzas/spinaci.jpg", name: "Spinach Pizza", description: "Spinach, mozzarella, garlic, and oregano", price: 15, stock: 5 },
    { image: "pizzas/prosciutto.jpg", name: "Prosciutto Pizza", description: "Prosciutto, Arugula, Cheese", price: 18, stock: 0 },
  ];

  return (
    <div className="menu">
      <h2 className="menu-title">Our Menu</h2>
      <div className="pizza-list">
        {pizzas.map((pizza, index) => (
          <Pizza key={index} {...pizza} />
        ))}
      </div>
    </div>
  );
}
 
const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(<App/>);
