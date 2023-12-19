import restaurantChefs from "../assets/people.jpg";
import restaurant from "../assets/restaurant.jpg";

import '../styles/Components.css'

function About () {
    return (
        <div className="about">
            <div className="about-content">
            <h4>Little Lemon</h4>
            <h5>Chicago</h5>
            <p>
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            </div>

            <div className="owners">
            <img id="chefs" src={restaurantChefs} alt="Chefs" />
            <img id="restaurant" src={restaurant} alt="restaurant image" />
            </div>
      </div>
    )
}

export default About