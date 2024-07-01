import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App () {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header () {
  return (
    <header className="header">
      <h1>
        Fast React Pizza Co.
      </h1>
    </header>
  );
}

function Menu () {
  const pizzas = pizzaData;
  const numOfPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numOfPizzas > 0
        ? <>

            <p>
              {' '}
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven, all organic, all delicious.
            </p>
            <ul className="pizzas">
              {/* here we pass the whole pizza object and we extract the data inside the pizza component */}
              {pizzaData.map (pizza => <Pizza pizzaObject={pizza} />) // key={pizza.name} --> key is used so every object has a unique key which is the name here
              }
            </ul>
          </>
        : <p>We're still working on our menu. Please come later :)</p>}

      {/* <Pizza
        name="Pizza Margherita"
        ingredient="Tomato and mozarella"
        photoName="pizzas/margherita.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={12} // Use {} to pass data other than strings
      /> */}

    </main>
  );
}

// Instead of passing general props(word) we pass pizzaObject
// itself so we know which props is being passed to this component
function Pizza({pizzaObject}) {
  // if (pizzaObject.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObject.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>

        <p>{pizzaObject.ingredients}</p>
        <span>price: {pizzaObject.soldOut ? 'SOLD OUT' : pizzaObject.price}</span>
      </div>

    </li>
  );
}

function Footer () {
  const hour = new Date ().getHours ();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">

      {isOpen
        ? <Order closeHour={closeHour} openHour={openHour} />
        : <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00
          </p>}

    </footer>
  );
  // return React.createElement ('footer', null, 'We are currently open!');
}

function Order({closeHour, openHour}) {
  return (
    <div className="order">
      <p>
        We're open untill {closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
const root = ReactDom.createRoot (document.getElementById ('root'));
root.render (<React.StrictMode><App /></React.StrictMode>);
