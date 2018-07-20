import * as ProposalActionTypes from '../actions/proposals';

const initialState = {
	proposals: [],
	faces: [],
	sortBy: '',
	sortDirection: 'asc',
	selected: [],
	selectedLength: null,
	menuOnId: ''
}

export default function Proposal (state = initialState, action) {
	switch (action.type) {
		case ProposalActionTypes.GET_CARGO_PROPOSALS: {
			return {
					...state,
					proposals: action.cargoes
			}
		}

		case ProposalActionTypes.SET_SELECT_ALL_PROPOSALS: {
			return {
					...state,
					selected: action.ids
			}
		}

		case ProposalActionTypes.SET_SORTED_BY: {
			return {
					...state,
					sortBy: action.sortBy
			}
		}

		case ProposalActionTypes.SET_SORTED_DIRECTION: {
			return {
					...state,
					sortDirection: action.sortDirection
			}
		}

		case ProposalActionTypes.SET_SELECTED_LENGTH: {
			return {
					...state,
					selectedLength: action.selectedLength
			}
		}

		default:
			return state
	}
}
