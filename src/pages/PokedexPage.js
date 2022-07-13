import React from 'react';

//Test Variables
var Vara = 5; 
var Varb = 3;

var subMe = Vara-Varb;

function PokedexPage () {
    return (
        <div>
            <h1> I am the PokedexPage </h1>
            
            {subMe} {/*Test to see if it displays on screen*/}

        </div>

    );

}

export default PokedexPage; // I will export to App.js