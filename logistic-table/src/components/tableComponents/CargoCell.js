import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import { Typography } from '@material-ui/core';
import CargoInfo from './cellComponents/CargoInfo';
import LoadTypes from './cellComponents/LoadTypes';
import Premisions from './cellComponents/Premisions';

class CargoCell extends React.Component {
    render() {
        const {cargoName, cargoInfo, premisions, loadTypes} = this.props;

		return (
            <TableCell component="th" scope="row" padding="none">
                { (cargoName ) 
                    ? <Typography variant="subheading"></Typography> 
                    : null
                }

                <CargoInfo ci={cargoInfo} />
                <LoadTypes lt={loadTypes} />
                <Premisions pm={premisions} />
			</TableCell>
		)
	}
}

CargoCell.propeType = {
    cargoName: PropTypes.string,
    cargoInfo: PropTypes.object.isRequired,
    premisions: PropTypes.object.isRequired,
    loadTypes: PropTypes.array
}

export default CargoCell;