import GreekSaladImage from '../assets/greek salad.jpg';
import BruschettaImage from '../assets/bruchetta.svg';
import LemonDessertImage from '../assets/lemon dessert.jpg';

import { NavLink } from 'react-router-dom';

function Specials () {
    const menus = [
        {   
            image: GreekSaladImage,
            title: "Greek Salad",
            price: "$12.99",
            description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
            order: "Order a delivery"
        },
        {
            image: BruschettaImage,
            title: "Bruschetta",
            price: "$5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            order: "Order a delivery"
        },
        {
            image: LemonDessertImage,
            title: "Lemon Dessert",
            price: "$5.00",
            description: "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
            order: "Order a delivery"
        }
    ];
    const specialMenusItems = menus.map(menu => {
        return (
                <div className='specials-card'>
                    <div>
                        <img src={menu.image} alt="Special item" />
                    </div>
                    <div>
                        <div className='specials-title'>
                            <h3>{menu.title}</h3>
                            <h3 className="price">{menu.price}</h3>
                        </div>
                        <p>{menu.description}</p>
                        <NavLink to="#">
                            <h4>{menu.order}</h4>
                        </NavLink>
                    </div>
                </div>
        )
})
    return (
        <div>
            <div className='specials'>
                <h1>Specials</h1>
                <button className='specials-btn'>Online Menu</button>
            </div>
            <div className='specials-menu'>
                {specialMenusItems}
            </div>
        </div>
    )
}

export default Specials;