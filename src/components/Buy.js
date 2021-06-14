import Ticket from './Ticket';
import { Link } from "react-router-dom";
import "../styles/main.css";
import "../styles/buy.css";

const Buy = (props) => {

    const id = props.location.state.data.id;
    const data = props.location.state;

    return ( 
    <section className='buy-container'>

        <article className='buy-p-container'>
            <p className='buy-p'>You are about to score</p>
            <p className='buy-p'>some tickets to</p>
        </article>
        
        <Ticket data={data} />
        
        <Link to={{
                pathname: 'confirm:' + id,
                state: { data }
            }} style={{ textDecoration: 'none' }} className={'buy-button'}>Beställ</Link>
    </section> 
    );
}
 
export default Buy;
