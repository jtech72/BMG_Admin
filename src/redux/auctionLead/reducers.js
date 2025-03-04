//------------------------------------R E D U C E R S-------------------------------------------------
import { LeadActionTypes } from "./constants"

const LEAD_DATA_INITIAL_STATE = {
    leadData: [],
    loading: false
}

const leadDataReducer = (state = LEAD_DATA_INITIAL_STATE, action) => {
    switch (action.type) {
        case LeadActionTypes.AUCTION_LEAD_LOADING:
            return {
                leadData: state.leadData,
                loading: true
            }
        case LeadActionTypes.AUCTION_LEAD_SUCCESS:
            return {
                leadData: action.payload,
                loading: false
            }
        case LeadActionTypes.AUCTION_LEAD_ERROR:
            return {
                leadData: action.payload,
                loading: false
            }
        default: return state
    }
}

export {
    leadDataReducer
}