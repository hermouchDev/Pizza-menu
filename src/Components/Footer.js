function Footer() {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const openHour = 11;
    const closeHour = 23;
    const isOpen = hour >= openHour && hour <= closeHour;
    return (
        <footer className="footer">
            <div className="order">
                <p>| {hour}:{minute} |</p> 
                {
                    isOpen ? 
                        <Open closeHour={closeHour}/> : 
                        <Close openHour={openHour} closeHour={closeHour}/>
                } 
            </div>
        </footer>
    )
}

function Open(props) {
    return (
        <>
            <p> We are currently Open until {props.closeHour}:00</p>
            <p>- Come visit us or order online ❤️ -</p>
            <button className="btn">Order</button>
        </>
    );
}

function Close(props) {
    return (
        <>
            <p> We are currently Close</p>
            <p>HERMOUCH PIZZA happy to welcom you between {props.openHour}:00 and {props.closeHour}:00.</p>
        </>
    );
}

export default Footer;