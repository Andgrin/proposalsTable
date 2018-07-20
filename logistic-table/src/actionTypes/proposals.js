import * as ProposalsActionTypes from '../actions/proposals';

export const getCargoProposalsList = (cargoes) => {
	return {
		type: ProposalsActionTypes.GET_CARGO_PROPOSALS,
		cargoes
	}
}

export const setSelectedAllProposals = ( ids ) => {
	return {
		type: ProposalsActionTypes.SET_SELECT_ALL_PROPOSALS,
		ids
	}
}

export const setSortedBy = ( sortBy ) => {
	return {
		type: ProposalsActionTypes.SET_SORTED_BY,
		sortBy
	}
}

export const setSortDirection = ( sortDirection ) => {
	return {
		type: ProposalsActionTypes.SET_SORTED_DIRECTION,
		sortDirection
	}
}

export const setSelectedLength = ( selectedLength ) => {
	return {
		type: ProposalsActionTypes.SET_SELECTED_LENGTH,
		selectedLength
	}
}
