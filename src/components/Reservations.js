import Header from "./Header";
import Footer from "./Footer";
import ReservationForm from "./ReservationForm";
import '../styles/Components.css'

function Reservations () {
    const fetchSlots = function(date) {
        let result = [];
        for (let i = 6; i<10; i++) {
            if(Math.random() < 0.6){
                result.push(i + ':00')
            }
            if(Math.random() < 0.5){
                result.push(i + ':30')
            }
        }
        return result;
    }
    let availableTimes = fetchSlots(new Date())
    return (
        <>
        <Header/>
        <div className='resformbackground'>
            <div className='resformcontainer'>
                <div className="resformtext">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <p>Book a table with us to share the experience.</p>
                </div>
                <div className='resform'>
                    <h1>Reserve a Table</h1>
                    <p>Please fill in your details to book your reservation at Little Lemon.</p>
                    <ReservationForm availableTimes={availableTimes}/>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Reservations