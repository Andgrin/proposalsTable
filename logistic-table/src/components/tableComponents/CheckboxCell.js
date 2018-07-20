import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';

class CheckboxCell extends React.Component {
    render() {
        return (
            <TableCell padding="checkbox">
				<Checkbox  />
			</TableCell>
        )
    }
}

export default CheckboxCell;