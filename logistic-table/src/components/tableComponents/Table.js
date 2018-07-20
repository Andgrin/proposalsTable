import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import TableHeader from './TableHead';
import SingleTableRow from './TableRow';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getCargoProposalsList } from '../../actionTypes/proposals';


const getSorting = (data, sortBy, sortDirection) => {
	switch(sortBy) {
		case 'date': 
			return _.orderBy(data, 'dates.dateFrom', sortDirection);
		case 'routeFrom': 
			return _.orderBy(data, 'pointFrom[0].townName', sortDirection)
		case 'routeTo': 
			return _.orderBy(data, 'pointTo[0].townName', sortDirection)
		case 'trans': 
			return _.orderBy(data, 'bodyType', sortDirection)
		case 'payment': 
			return _.orderBy(data, 'payment.paymentStavka', sortDirection)
		case 'contact': 
			return _.orderBy(data, 'proposalUser.face', sortDirection)
		default:
			return _.sortBy(data, 'dates.dateRepeat');
	}
}

class EnhancedTable extends React.Component {
	
	static propTypes = {
		proposals: PropTypes.array,
		sortBy: PropTypes.string,
		sortDirection: PropTypes.string
	}
	
	componentDidMount() {
		return fetch('http://localhost:3004/cargo/')
			.then( (response) => {
				if (response.status !== 200) {
						console.log('Looks like there was a problem. Status Code: ' +
						response.status);
						return;
				}
				// Examine the text in the response
				return response.json()
			})
			.then((data) => {
				// console.log(data, this);
				this.props.getCargoProposalsList(data)
			})
			.catch(function(err) {
				console.log('Fetch Error :-S', err);
			});
	}

  	render() {
		const { proposals, sortBy, sortDirection } = this.props;
		const sortProposals = getSorting(proposals, sortBy, sortDirection);
   
    	return (
			<Paper >
				<div >
					<Table aria-labelledby="tableTitle">
						<TableHeader rowCount={proposals.length} />

						<TableBody>
							{sortProposals
								.map( (n, index) => {
								return (
									<SingleTableRow rowType="cargo" oneItem={n} key={index} />
								)
							})}
						</TableBody>
					</Table>
				</div>
			</Paper>
		);
  	}
}

// EnhancedTable.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

const mapStateToProps = (state) => {
	return {
		proposals: state.proposals,
		sortBy: state.sortBy,
		sortDirection: state.sortDirection,
	}
}

const mapDispatchToProps = (dispatch, data) => {
	return {
		getCargoProposalsList: (data) => {
			dispatch(getCargoProposalsList(data));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EnhancedTable);