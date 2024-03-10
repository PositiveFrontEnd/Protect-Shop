import React from 'react';
import ShopsContent from "src/pages/ShopsPage/ShopsContent";
import ShopsMap from "src/pages/ShopsPage/ShopsMap";

const ShopsKyiv = () => {

    const center = { lat: 50.455, lng: 30.55 }
    const markers = [
        { lat: 50.45, lng: 30.6369, address: 'Kyiv, ave. Khotkevycha, 1b' },
        { lat: 50.4125, lng: 30.5233, address: 'Kyiv, str. Antonovycha, 176' },
        { lat: 50.493, lng: 30.5591, address: 'Kyiv, ave. R.Shukhevycha, 2t' },
        { lat: 50.4506, lng: 30.523, address: 'Kyiv, sq. Nezalezhnosti, 1' },
    ];

    return (
        <div className='shops container'>
            <ShopsMap zoom={11.2} center={center} markers={markers} />
            <div className='shops__content__block'>
                <ShopsContent city='kyiv' hours='11:00 – 20:00'
                    address='Kyiv, ave. Khotkevycha, 1b' />
                <ShopsContent city='kyiv' hours='11:00 – 22:00'
                    address='Kyiv, str. Antonovycha, 176' />
                <ShopsContent city='kyiv' hours='10:00 – 21:00'
                    address='Kyiv, ave. R.Shukhevycha, 2t' />
                <ShopsContent city='kyiv' hours='10:00 – 21:00'
                    address='Kyiv, sq. Nezalezhnosti, 1' />
            </div>
        </div>
    );
};

export default ShopsKyiv;