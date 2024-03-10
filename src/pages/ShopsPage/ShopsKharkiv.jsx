import React from 'react'
import ShopsContent from "src/pages/ShopsPage/ShopsContent";
import ShopsMap from "src/pages/ShopsPage/ShopsMap";

const ShopsKharkiv = () => {

    const center = { lat: 50.0011, lng: 36.270 }
    const markers = [
        { lat: 49.994, lng: 36.233, address: 'Kharkiv, str. Sumska, 10' },
        { lat: 50.0263, lng: 36.3318, address: 'Kharkiv, str. Heroiv Pratsi, 9' },
        { lat: 50.0096, lng: 36.2403, address: 'Kharkiv, str. Sumska, 102' },
        { lat: 49.972, lng: 36.306, address: 'Kharkiv, str. Heroiv Kharkova, 199b' },
    ];

    return (
        <div className='shops container'>
            <ShopsMap zoom={12} center={center} markers={markers} />
            <div className='shops__content__block'>
                <ShopsContent city='kharkiv' hours='10:00 – 21:00'
                    address='Kharkiv, str. Sumska, 10' />
                <ShopsContent city='kharkiv' hours='10:00 – 21:00'
                    address='Kharkiv, str. Heroiv Pratsi, 9' />
                <ShopsContent city='kharkiv' hours='10:00 – 21:00'
                    address='Kharkiv, str. Sumska, 102' />
                <ShopsContent city='kharkiv' hours='10:00 – 21:00'
                    address='Kharkiv, str. Heroiv Kharkova, 199b' />
            </div>
        </div>
    );
};

export default ShopsKharkiv;