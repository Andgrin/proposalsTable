import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import { Typography } from '@material-ui/core';
import RouteDirectionList from './cellComponents/RouteDirectionList';

class RouteCell extends React.Component {
	render() {
		const {routeF, routeT} = this.props;

		return (
			<TableCell component="th" scope="row" padding="none">
				{ (routeF && routeT ) ? <Typography variant="caption" >From</Typography> : null }
				{ (routeF ) ? <RouteDirectionList routes={routeF} /> : null }
				{ (routeF && routeT ) ? <Typography variant="caption" >To</Typography> : null }
				{ (routeT ) ? <RouteDirectionList routes={routeT} /> : null }
			</TableCell>
		)	
	}
}

RouteCell.propTypes = {
	routeF: PropTypes.array,
	routeT: PropTypes.array
};

export default RouteCell;