//------------------------------------A P I-----------------------------------------------------------------
import { APICore } from '../../helpers/api/apiCore';
import * as URL from '../../helpers/api/apiEndPoint';

const api = new APICore();

//products
function getDashboardApi(params: any): any {
    return api.get(`${URL.GET_DASHBOARD_DATA}`);
}

export {
    getDashboardApi
};