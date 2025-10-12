import pizzaData from '../data'
function Main() {
    const pizzas = pizzaData;
    return (
        <main className="menu">
            <h2>Our menu</h2>
            <ul className='pizzas'>
                {
                    pizzas.map((pizza) => <Pizza pizzaInfo={pizza} key={pizza.name}/>)
                }
            </ul>
        </main>
    )
}

function Pizza(props) {
    const pizzaStatu = props.pizzaInfo.soldOut ? "sold-out" : "";
    return (
        <li className={`pizza ${pizzaStatu}`}>
            <img src={props.pizzaInfo.photoName} alt="props.pizzaName" />
            <div>
                <h3>{props.pizzaInfo.name}</h3>
                <p>{props.pizzaInfo.ingredients}</p>
                {
                    pizzaStatu ? <span>Sold Out</span> : <span>{props.pizzaInfo.price} DH</span>
                }
            </div>
        </li>
    );
}


export default Main
