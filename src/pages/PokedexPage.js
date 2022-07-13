import React from 'react';
import {functionTestDummy, anotherDummy} from '../PokedexPageFunction.js';




//Test Variables
var subMe = "I am the subMe test Variable       ";



function PokedexPage () {
    return (
        <div>
            <div>
                <h1> I am the PokedexPage </h1>
                <p>This is the test section with {subMe}, {anotherDummy}, and the {functionTestDummy}</p> {/*Test to see if it displays on screen*/}

            </div>
            
            <div>
                <p>________________</p>                
                <p>now let's display the Pokedex</p>

            </div>            
                    
        </div>

    );

}

export default PokedexPage; // I will export to App.js