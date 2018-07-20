import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function PhoneList(props){
	const phoneArray = props.phones;
	const phones = phoneArray.map( ( p, index )=> {
		return (	
			<ListItem key={index} >
				<ListItemText secondary={p} />
			</ListItem>
		)
	});

	return (
		<List >
			{phones}
		</List>
	)
}

class ContactsCell extends React.Component {
	render() {
		const user = this.props.user;
		return (
			<TableCell component="th" scope="row" padding="none">
				{ !!(user.face) ? <Typography variant="body2">{user.face}</Typography> : null }
				<PhoneList phones={user.phones} />
			</TableCell>
		)
	}
}

ContactsCell.propTypes = {
	user: PropTypes.object
};

export default ContactsCell;