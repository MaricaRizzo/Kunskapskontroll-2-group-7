import Item from './Item';
import "../styles/main.css";
import "../styles/events.css"


const Events = () => {
    let tickets = require('../assets/tickets.json');
    return ( 
        <section>
            <h1>Events</h1>
            {
                tickets.map((ticket, index) => <Item key={index} data={ticket} />)    
            }
        </section>
     );
}
 
export default Events;