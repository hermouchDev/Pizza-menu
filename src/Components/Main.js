function Main() {
    return (
        <main className="menu">
            <h2>Our menu</h2>
            <Pizza 
                name="Focaccia" 
                ingredients="Bread with italian olive oil and rosemary"
                price={25}
                photoName="pizzas/focaccia.jpg"
            />
            <Pizza 
                name="Pizza Margherita" 
                ingredients="Tomato and mozarella"
                price={35}
                photoName="pizzas/margherita.jpg"
            />
        </main>
    )
}

function Pizza(props) {
    return (
        <div className="pizza">
            <img src={props.photoName} alt="props.pizzaName" />
            <div>
                <h3>{props.pizzaName}</h3>
                <p>{props.ingredients}</p>
                <span>{props.price} DH</span>
            </div>
        </div>
    );
}


export default Main
