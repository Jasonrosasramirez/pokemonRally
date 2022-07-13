import React from 'react';
import { Link } from 'react-router-dom'


function NavHeader() {
    
    return(
        <nav classname = 'NavbarDiv'>
            <h3> Pokemon Rally </h3>

            <ul className='navLinks'>
                <Link to = '/'> <li> Home Page </li> </Link>
                <Link to = '/ContactPage'> <li> Contact </li> </Link>
                <Link to = '/PokedexPage'> <li> Pokedex </li> </Link>

            </ul>

        </nav>
    );

}


export default NavHeader; 

/*

https://www.youtube.com/watch?v=Law7wfdg_ls
*/