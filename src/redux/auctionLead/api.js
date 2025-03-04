//------------------------------------A P I-----------------------------------------------------------------
import { APICore } from '../../helpers/api/apiCore';
import * as URL from '../../helpers/api/apiEndPoint';

const api = new APICore();

function getLeadApi(params) {
    const {search,limit,page}=params?.data
    return api.get(`${URL.GET_AUCTION_LEAD}?search=${search}&limit=${limit}&page=${page}`);
}

export {
    getLeadApi
};