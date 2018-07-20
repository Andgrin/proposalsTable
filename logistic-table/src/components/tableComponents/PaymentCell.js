import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import { Typography } from '@material-ui/core';

class PaymentCell extends React.Component {
	render() {
		const pay = this.props.pay;

		return (
			<TableCell component="th" scope="row" padding="none">
				{ (pay.paymentStavka) 
					? <Typography variant="subheading" >
						{pay.paymentStavka} 
						{pay.paymentCurrency}/
						{pay.paymentUnit}
					</Typography> 
					: null 
				}
				{ (pay.paymentMoment) ? <Typography variant="body1" >Pay moment: {pay.paymentMoment}</Typography> : null }
				{ (pay.paymentPrepay) ? <Typography variant="body1" >Prepay: {pay.paymentPrepay}%</Typography> : null }
				{ (pay.paymentDelay) ? <Typography variant="body1" >Paymant delay: {pay.paymentDelay} days</Typography> : null }
			</TableCell>
		)	
	}
}

PaymentCell.propTypes = {

};

export default PaymentCell;