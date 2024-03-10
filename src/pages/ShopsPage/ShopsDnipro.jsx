import React from 'react';
import ShopsContent from "src/pages/ShopsPage/ShopsContent";
import ShopsMap from "src/pages/ShopsPage/ShopsMap";

const ShopsDnipro = () => {

    const center = { lat: 48.4486, lng: 35.0266 }
    const markers = [
        { lat: 48.425, lng: 35.0216, address: 'Dnipro, blv. Zorianyi, 1a' },
        { lat: 48.4644, lng: 35.0473, address: 'Dnipro, ave. D.Yavornytskogo, 50' },
    ];

    return (
        <div className='shops container'>
            <ShopsMap zoom={12.5} center={center} markers={markers} />
            <div className='shops__content__block'>
                <ShopsContent city='dnipro' hours='11:00 – 20:00'
                    address='Dnipro, blv. Zorianyi, 1a' />
                <ShopsContent city='dnipro' hours='10:00 – 21:00'
                    address='Dnipro, ave. D.Yavornytskogo, 50' />
            </div>
        </div>
    );
};

export default ShopsDnipro;