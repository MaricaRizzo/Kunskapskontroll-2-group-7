const Ticket = (props) => {

    return ( 
       
        <section>
            <h1 className='buy-h1'>{props.data.data.title}</h1>
            <p className='buy-date-time'>{props.data.data.day} {props.data.data.month} kl {props.data.data.startTime}-{props.data.data.endTime}</p>
            <p className='buy-place'>@ {props.data.data.place}</p>
            <h2 className='buy-price'>{props.data.data.price} sek</h2>
        </section>
    );
}
 
export default Ticket;

