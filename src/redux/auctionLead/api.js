//------------------------------------A P I-----------------------------------------------------------------
import { APICore } from '../../helpers/api/apiCore';
import * as URL from '../../helpers/api/apiEndPoint';

const api = new APICore();

function getLeadApi(params) {
    const {search,limit,page}=params?.data
    return api.get(`${URL.GET_AUCTION_LEAD}?search=${encodeURIComponent(search)}&limit=${limit}&page=${page}`);
}

function getSoldProductApi(params) {
    const {search,limit,page,soldStatus}=params?.data
    // search=${encodeURIComponent(search)}&
    return api.get(`${URL.GET_AUCTION_SOLD_PRODUCT}?limit=${limit}&page=${page}&soldSatus=${soldStatus}
 `);
}

function getLiveBidApi(params) {
    // const {search,limit,page}=params?.data
    // search=${search}&
    return api.get(`${URL.GET_LIVE_BIDS}`);
}

export {
    getLeadApi,
    getSoldProductApi,
    getLiveBidApi
};