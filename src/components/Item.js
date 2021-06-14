import { Link } from "react-router-dom";
import "../styles/main.css";
import "../styles/events.css";

const Item = (props) => {

    const id = props.data.id;
    const data = props.data

    return ( 
        <section className="events-container">
            <aside className='event-date-box'>
                <p className="event-day">{props.data.day}</p> 
                <p className="event-month">{props.data.month}</p> 
            </aside>

            <article className='eventsCard'>
                <Link to={{
                    pathname: 'events:' + id,
                    state: {data}
                }} style={{ textDecoration: 'none' }}
                >
                    <h2 className="event-title">{props.data.title}</h2></Link>
                    <p className="event-place">{props.data.place}</p>
                    <section className="event-time-price">
                        <p>{props.data.startTime}-{props.data.endTime}</p>
                        <h3>{props.data.price + ' sek'}</h3>
                    </section>
                    
            </article> 
        </section>
    );
}
 
export default Item;