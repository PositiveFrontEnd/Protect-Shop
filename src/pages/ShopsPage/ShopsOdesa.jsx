import React from 'react';
import ShopsContent from "src/pages/ShopsPage/ShopsContent";
import ShopsMap from "src/pages/ShopsPage/ShopsMap";

const ShopsOdesa = () => {

    const center = {lat: 46.4509, lng: 30.725}
    const markers = [
        {lat: 46.4156, lng: 30.7116, address: 'Odesa, all. Nebesnoi Sotni, 2'},
        {lat: 46.4301, lng: 30.7629, address: 'Odesa, all. Arkadiiska, 1'},
        {lat: 46.4624, lng: 30.741, address: 'Odesa, str. Semaforna, 4'},
        {lat: 46.4707, lng: 30.7312, address: 'Odesa, str. Panteleimonivska, 88'},
    ];

    return (
        <div className='shops container'>
            <ShopsMap zoom={12} center={center} markers={markers}/>
            <div className='shops__content__block'>
                <ShopsContent city='odesa' hours='11:00 – 20:00'
                              address='Odesa, all. Nebesnoi Sotni, 2'/>
                <ShopsContent city='odesa' hours='10:00 – 22:00'
                              address='Odesa, all. Arkadiiska, 1'/>
                <ShopsContent city='odesa' hours='10:00 – 21:00'
                              address='Odesa, str. Semaforna, 4'/>
                <ShopsContent city='odesa' hours='10:00 – 22:00'
                              address='Odesa, str. Panteleimonivska, 88'/>
            </div>
        </div>
    );
};

export default ShopsOdesa;