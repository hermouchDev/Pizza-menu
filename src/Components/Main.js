import pizzaData from "../data";
function Main() {
    const pizzas = pizzaData;
    return (
        <main className="menu">
            <h2>Our menu</h2>
            <p>
                Authentic Moroccain cuisine. 6 creative dishes to choose from.
                All from our stone oven, All organic, All delicious.
            </p>
            <ul className="pizzas">
                {pizzas.map((pizza) => (
                    <Pizza pizzaInfo={pizza} key={pizza.name} />
                ))}
            </ul>
        </main>
    );
}

function Pizza({ pizzaInfo }) {
    const pizzaStatu = pizzaInfo.soldOut ? "sold-out" : "";
    return (
        <li className={`pizza ${pizzaStatu}`}>
            <div className="pizza-image">
                <img src={pizzaInfo.photoName} alt="props.pizzaName" />
            </div>
            <div className="pizza-info">
                <h3>{pizzaInfo.name}</h3>
                <p>{pizzaInfo.ingredients}</p>
                {pizzaStatu ? (
                    <span>Sold Out</span>
                ) : (
                    <span>{pizzaInfo.price} DH</span>
                )}
            </div>
        </li>
    );
}

export default Main;
