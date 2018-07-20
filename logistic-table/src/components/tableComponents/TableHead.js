import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import {setSelectedAllProposals, setSortedBy, setSortDirection, setSelectedLength } from '../../actionTypes/proposals';

const columnData = [
	{ id: 'date', numeric: false, disablePadding: true, label: 'Date' },
	{ id: 'routeFrom', numeric: false, disablePadding: false, label: 'Departure' },
	{ id: 'routeTo', numeric: false, disablePadding: false, label: 'Destination' },
	{ id: 'trans', numeric: false, disablePadding: false, label: 'Body info' },
	{ id: 'payment', numeric: false, disablePadding: false, label: 'Payment info' },
	{ id: 'contact', numeric: false, disablePadding: false, label: 'Contact face' },
];

class TableHeader extends Component {

	static propTypes = {
		proposals: PropTypes.array,
		sortBy: PropTypes.string,
		sortDirection: PropTypes.string,
		selectedLength: PropTypes.number
	}

	handleRequestSort = property => event => {
		const orderBy = property;
		let order = 'desc';

		if (this.props.sortBy === property && this.props.sortDirection === 'desc') {
			order = 'asc';
		}

		this.props.setSortedBy(orderBy);
		this.props.setSortDirection(order);
	};

	handleSelectAllClick = (event, checked) => {
		let selected = [];
		if (checked) {
			selected = this.props.proposals.map(m => m._id);
			this.props.setSelectedAllProposals(selected);
			this.props.setSelectedLength(selected.length);
		} else {
			this.props.setSelectedAllProposals(selected);
			this.props.setSelectedLength(0);
		}
	};

	
	render() {
		const { 
			proposals,
			selectedLength,	
			sortDirection, 
			sortBy, 
			// selected,
			rowCount } = this.props;

		return (
		  <TableHead>
			 <TableRow>
				<TableCell padding="checkbox">
				  <Checkbox
					 checked={selectedLength === rowCount}
					 onChange={this.handleSelectAllClick}
				  />
				</TableCell>

				{columnData.map(column => {
				  return (
					 <TableCell
						key={column.id}
						// numeric={column.numeric}
						padding={column.disablePadding ? 'none' : 'default'}
						sortDirection={sortBy === column.id ? sortDirection : false}
					 >
						<Tooltip
						  title="Sort"
						//   placement={column.numeric ? 'bottom-end' : 'bottom-start'}
						  enterDelay={300}
						>
						  <TableSortLabel
							 active={this.props.sortBy === column.id}
							 direction={this.props.sortDirection}
							 onClick={this.handleRequestSort(column.id)}
						  >
							 {column.label}
						  </TableSortLabel>
						</Tooltip>
					 </TableCell>
				  );
				}, this)}
			 </TableRow>
		  </TableHead>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		selected: state.selected,
		selectedLength: state.selectedLength,
		sortBy: state.sortBy,
		sortDirection: state.sortDirection,
		proposals: state.proposals
	}
}

const mapDispatchToProps = (dispatch, data) => {
	return {
		setSelectedAllProposals: (data) => {
			dispatch(setSelectedAllProposals(data));
		},
		setSelectedLength: (data) => {
			dispatch(setSelectedLength(data));
		},
		setSortedBy: (data) => {
			dispatch(setSortedBy(data));
		},
		setSortDirection: (data) => {
			dispatch(setSortDirection(data));
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);