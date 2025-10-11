function Footer() {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const openHour = 11;
    const closeHour = 23;
    const isOpen = (hour >= openHour && hour <= closeHour) ? "Open" : "Close";
    return (
        <footer className="footer"> 
            {hour}:{minute} | We are currently {isOpen}
        </footer>
    )
}

export default Footer
