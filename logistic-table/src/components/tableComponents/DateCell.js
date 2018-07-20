import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import { Typography } from '@material-ui/core';
import format from 'date-fns/format';

function DateRepeatBlock (props) {
	if ( props.dr > props.dc ) {
		return (
			<Typography variant="body2">
				Rep: {format(props.dr, 'mm:HH MM.DD.YYYY')}
			</Typography>
		)
	} else if( props.dr === props.dc ){
		return (
			<Typography variant="body2">
				NEW!
				<br/>
				{format(props.dc, 'mm:HH MM.DD.YYYY')}
			</Typography>
		)
	}

	return false;
}


function DateRangeBlock (props) {
	if (props.df) {
		if (props.dt) {
			return (
				<Typography variant="subheading">
					{format(props.df, 'DD.MM')} - {format(props.dt, 'DD.MM')}
				</Typography>
			)
		} else {
			return (
				<Typography variant="subheading">
					{format(props.df, 'DD.MM')}
				</Typography>
			)
		}
	}
	return false;
}

class DateCell extends React.Component {
	render() {
		const dates = this.props.dates;
		return (
			<TableCell component="th" scope="row" padding="none">
				<DateRangeBlock df={dates.dateFrom} dt={dates.dateTo} />
				<DateRepeatBlock dr={dates.dateRepeat} dc={dates.dateCreate} />
			</TableCell>
		)
	}
}

export default DateCell;