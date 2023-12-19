import { yupResolver } from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form";
import * as yup from "yup";

import Header from "./Header";
import Footer from "./Footer";
import '../styles/Components.css'

const schema = yup.object({
    name: yup.string().required("Full name is a required field!"),
    email: yup.string().required("Email is a required field!").email("Email is not valid!"),
    phone: yup.string().required("Telephone is a required field!").matches(/^(\+\d{2,3}\s)?\(?\d{3}\)?[\s.-]\d{2}[\s.-]\d{3}[\s.-]\d{4}$/, "Phone number must match the form 233 00 000 0000"),
    guests: yup.number().min(1, "There must be at least 1 guest!").required("Please specify number of guests per table!"),
    date: yup.string().required("Please select date and time!"),
})

function ReservationForm () {
    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const formSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <div className='resformfield'>
                <label htmlFor="name">Full Name</label>
                <input type="text" placeholder="First Last" name="name" {...register("name")}/>
                <span className="resformerror">{errors.name?.message}</span>
            </div>
            <div className='resformfield'>
                <label htmlFor="email">Email id</label>
                <input type="text" placeholder="name@email.com" name="email" {...register("email")}/>
                <span className="resformerror">{errors.email?.message}</span>
            </div>
            <div className='resformfield'>
                <label htmlFor="phone">Phone number</label>
                <input type="tel" placeholder="123 456 7890" name="phone" {...register("phone")}/>
                <span className="resformerror">{errors.phone?.message}</span>
            </div>
            <div className='resformfield resformoccasion'>
                    <label htmlFor="occasion">Occasion (optional)</label>
                    <div className="resformoptions">
                        <select name="occasion" {...register("occasion")}>
                            <option value="select">Select occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="engagement">Engagement</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </div>
                </div>
            <div className='resformfield'>
                <label htmlFor="guests">Guests</label>
                <input type="number" placeholder="2" defaultValue={0} name="guests" {...register("guests")}/>
                <span className="resformerror">{errors.guests?.message}</span>
            </div>
            <div className='resformfield'>
                <label htmlFor="date">Date & Time</label>
                <input type="datetime-local" placeholder="" name="date" {...register("date")}/>
                <span className="resformerror">{errors.date?.message}</span>
            </div>
            <div className='resformfield'>
                <button type="submit">Reserve</button>
            </div>
        </form>
    )
}
function Reservations () {
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
                    <ReservationForm/>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Reservations