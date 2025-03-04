//------------------------------------A C T I O N S----------------------------------------------------
import { LeadActionTypes } from './constants';

export const getLeadActions = (data) => ({
    type: LeadActionTypes.AUCTION_LEAD_FIRST,
    data
});

