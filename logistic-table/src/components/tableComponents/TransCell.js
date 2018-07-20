import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import { Typography } from '@material-ui/core';
import Mass from './cellComponents/Mass';



function CargoInfo(props) {
    const {mass1, mass2, volume1, volume2, length, width, height} = props;
    
    if ( mass1 || mass2 || volume1 || volume2 || length || width || height ){
        return (
            <div>
                { ( mass1 || mass2 ) ? <Mass m1={mass1} m2={mass2} /> : null }
                { ( volume1 || volume2 ) ? <Mass v1={volume1} v2={volume2} /> : null }
                { ( length || width || height ) ? <Mass l={length} w={width} h={height} /> : null }
            </div>
        )
    }

    return false;
}

function LoadTypes(props) {
    return false;
}

function Premisions(props) {
    return false;
}

class TransCell extends React.Component {
    render() {
        const {cargoName, cargoInfo, premisions, loadTypes} = this.props;

		return (
            <TableCell component="th" scope="row" padding="none">
                { (cargoName && cargoName.length !== 0) 
                    ? <Typography variant="subheading"></Typography> 
                    : null
                }

                <CargoInfo ci={cargoInfo} />
                <LoadTypes ci={loadTypes} />
                <Premisions ci={premisions} />
			</TableCell>
		)
	}
}

TransCell.propeType = {
    cargoName: PropTypes.string,
    cargoInfo: PropTypes.object.isRequered,
    premisions: PropTypes.object.isRequered,
    loadTypes: PropTypes.array
}

export default TransCell;