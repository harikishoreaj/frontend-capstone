import { NavLink } from "react-router-dom";

import Food from '../assets/restauranfood.jpg';
import '../styles/Components.css';

function Hero () {
    return (
        <div className="Hero">
            <div className="left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <NavLink to="/reservations"><button className="btn">Reserve a Table</button></NavLink>
            </div>
            <div className="right">
                <div className="hero-image">
                    <img className="hero-img" src={Food}/>
                </div>
            </div>
        </div>
    )
}

export default Hero;