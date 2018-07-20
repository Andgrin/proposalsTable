import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function SinglePoint (props) {
	const p = props.point;
	return (
		<ListItem >
			<ListItemText primary={p.townName} secondary={p.areaName}  />
		</ListItem>
	)
}

class RouteDirectionList extends React.Component {
    render() {
		const routes = this.props.routes;
		const points = routes.map((point, index) => (
			<SinglePoint point={point} key={index} />
		));

		return (
			<List>
				{points}
			</List>
		)
    }
}

export default RouteDirectionList;