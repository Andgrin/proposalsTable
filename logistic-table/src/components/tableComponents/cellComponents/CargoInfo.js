import React from 'react';
import Mass from './Mass';
import Volume from './Volume';
import Sizes from './Sizes';

function CargoInfo(props) {
    const {mass1, mass2, volume1, volume2, length, width, height} = props.ci;

    if ( mass1 || mass2 || volume1 || volume2 || length || width || height ){
        return (
            <div>
                { ( mass1 || mass2 ) ? <Mass m1={mass1} m2={mass2} /> : null }
                { ( volume1 || volume2 ) ? <Volume v1={volume1} v2={volume2} /> : null }
                { ( length || width || height ) ? <Sizes l={length} w={width} h={height} /> : null }
            </div>
        )
    }
    return false;
}

export default CargoInfo;