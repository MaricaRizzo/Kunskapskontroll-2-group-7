import "../styles/main.css";
import "../styles/tickets.css";

const Tickets = (props) => {
    
    const ticketData = props.location.state;

    return ( 
        <section >

            <article className='tickets-h1-container'>
                <h1 className='tickets-h1'>Tack för din</h1>
                <h1 className='tickets-h1'>beställning</h1>
            </article>

            <article className='ticket-card-container'>
                
                <section className='title-container'>
                    <p>What</p>
                    <h3>{ticketData.data.data.title}</h3>
                </section>

                <section className='location-container'>
                    <p>Where</p>
                    <h3>{ticketData.data.data.place}</h3>
                </section>

                <section className='info-container'>
                    
                    <section className='small-container right-border'>
                        <p>When</p>
                        <h3>{ticketData.data.data.day}  {ticketData.data.data.month}</h3>
                    </section>

                    <section  className='small-container right-border'>
                        <p>From</p>
                        <h3>{ticketData.data.data.startTime}</h3>
                    </section>

                    <section  className='small-container'>
                        <p>To</p>
                        <h3>{ticketData.data.data.endTime}</h3>
                    </section>

                </section>
                
            </article>

        </section>
     );
}
 
export default Tickets;