import pizzaData from '../data'
function Main() {
    return (
        <main className="menu">
            <h2>Our menu</h2>
            <ul className='pizzas'>
                {
                    pizzaData.map((pizza) => <Pizza pizzaInfo={pizza} key={pizza.name}/>)
                }
            </ul>
        </main>
    )
}

function Pizza(props) {
    return (
        <li className="pizza">
            <img src={props.pizzaInfo.photoName} alt="props.pizzaName" />
            <div>
                <h3>{props.pizzaInfo.name}</h3>
                <p>{props.pizzaInfo.ingredients}</p>
                <span cal>{props.pizzaInfo.price} DH</span>
            </div>
        </li>
    );
}


export default Main
