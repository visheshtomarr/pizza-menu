import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

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
        <header className="header">
            <h1>
                Fast React Pizza Co.
            </h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>
            {numPizzas > 0 ? (
                <>
                    <p>
                        Authentic Italian pizzas. {numPizzas} pizzas to choose from. All from our stone
                        oven, all organic and delicious.
                    </p>
                    <ul className="pizzas">
                        {pizzas.map(pizza => (
                            <Pizza pizzaObj={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </>
            ) : (
                <p>
                    We are still working on our menu. Please come back later :)
                </p>
            )}
        </main>
    );
}

function Footer() {
    const hours = new Date().getHours();
    const openHrs = 12;
    const closeHrs = 22;
    const isOpen = hours >= openHrs && hours <= closeHrs;
    console.log(isOpen, hours);
    return (
        <footer className="footer">
            {isOpen ? <Order openHours={openHrs} closeHours={closeHrs} /> : (
                <p>
                    We are happy to welcome you between {openHrs}:00 and {closeHrs}:00.
                </p>
            )}
        </footer>
    );
}

function Order({ openHours, closeHours }) {
    return (
        <div className="order">
            <p>
                We are open from {openHours}:00 until {closeHours}:00. Come visit us or order online.
            </p>
            <button className="btn">Order</button>
        </div>
    );
}

function Pizza({ pizzaObj }) {
    return (
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
            </div>
        </li>
    );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);