import React, { Component } from 'react';
import './App.css';
import EnhancedTable from './components/tableComponents/Table';
import PageHeader from './components/PageHeader';


class App extends Component {
	render() {
		return (
			<div className="App">
				<PageHeader />
				<EnhancedTable />
			</div>
		);
	}
}

export default App;
