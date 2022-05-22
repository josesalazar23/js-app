import React from 'react';
import ShoppingCart from '../ShoppingCart';


const NavBar = () => {

    return (
        <div className='navbg mainNav navUrl'>
            <a className='navUrl' href='https://www.google.com.ar/?hl=es'>city gamer</a>
            <a className='navUrl' href='https://www.google.com.ar/?hl=es'>ofertas</a>
            <a className='navUrl' href='https://www.google.com.ar/?hl=es'>contactanos</a>
            <ShoppingCart />
        </div>
    )
}


export default NavBar;