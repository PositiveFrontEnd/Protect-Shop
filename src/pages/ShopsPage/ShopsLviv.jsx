import React from 'react';
import ShopsContent from "src/pages/ShopsPage/ShopsContent";
import ShopsMap from "src/pages/ShopsPage/ShopsMap";


const ShopsLviv = () => {

    const center = {lat: 49.844, lng: 24.0261}
    const markers = [
        {lat: 49.8497, lng: 24.0226, address: 'Lviv, str. Pid Dubom, 7b'},
        {lat: 49.8388, lng: 24.0341, address: 'Lviv, sq. Soborna, 14'},
    ];

    return (
        <div className='shops container'>
            <ShopsMap zoom={14.4} center={center} markers={markers}/>
            <div className='shops__content__block'>
                <ShopsContent city='Lviv' hours='10:00 – 21:00'
                              address='Lviv, str. Pid Dubom, 7b'/>
                <ShopsContent city='Lviv' hours='10:00 – 21:00'
                              address='Lviv, sq. Soborna, 14'/>
            </div>
        </div>
    );
};

export default ShopsLviv;