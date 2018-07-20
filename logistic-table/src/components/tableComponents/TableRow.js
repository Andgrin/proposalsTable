import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import DateCell from './DateCell';
import ContactsCell from './ContactsCell';
import RouteCell from './RouteCell';
import PaymentCell from './PaymentCell';
import CargoCell from './CargoCell';
import {connect} from 'react-redux';
import {setSelectedAllProposals, setSelectedLength } from '../../actionTypes/proposals';



class SingleTableRow extends React.Component {
    // shouldComponentUpdate(nextProps) {
    //     return (nextProps.selected !== this.props.selected);
    // }


    handleSelectClick = (event, itemId) => {
        console.log(event,itemId);
        
        const selected = this.props;
		const selectedIndex = selected.indexOf(itemId);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, itemId);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
			selected.slice(0, selectedIndex),
			selected.slice(selectedIndex + 1),
			);
        }
        
        console.log("newSelected", newSelected);
        console.log("selectedIndex", selectedIndex);
        console.log("selected", selected);
        this.props.setSelectedAllProposals(newSelected);
		this.props.setSelectedLength(newSelected.length);
    };
    
    isSelected = (selected, id) => selected.includes(id);

    render() {
        const {rowType, oneItem, selected} = this.props;
        const isSelected = this.isSelected(selected, oneItem._id);

        return (
            <TableRow 
                hover
                tabIndex={-1}
                // onClick={(event) => this.handleSelectClick( event, oneItem._id)}
            >   
                <TableCell padding="checkbox">
                    <Checkbox 
                        checked={isSelected}
                        onClick={(event) => this.handleSelectClick( event.target.checked, oneItem._id)}
                    />
                </TableCell>
                <DateCell dates={oneItem.dates}  />
                <RouteCell routeF={oneItem.pointFrom} />
                <RouteCell routeT={oneItem.pointTo} />
                { (rowType === "cargo") 
                    ? <CargoCell 
                        cargoName={oneItem.cargoName} 
                        cargoInfo={oneItem.cargoInfo} 
                        premisions={oneItem.premisions} 
                        loadTypes={oneItem.loadTypes} 
                    /> 
                    : null 
                }
                <PaymentCell pay={oneItem.payment} />
                <ContactsCell user={oneItem.proposalUser} />
            </TableRow>
        )
    }
}

SingleTableRow.propeType = {
    rowType: PropTypes.string.isRequered,
    oneItem: PropTypes.object.isRequered
}

const mapStateToProps = (state) => {
	return {
		selected: state.selected,
		selectedLength: state.selectedLength,
	}
}

const mapDispatchToProps = (dispatch, data) => {
	return {
		setSelectedAllProposals: (data) => {
			dispatch(setSelectedAllProposals(data));
		},
		setSelectedLength: (data) => {
			dispatch(setSelectedLength(data));
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleTableRow);