//------------------------------------A P I-----------------------------------------------------------------
import { APICore } from '../../helpers/api/apiCore';
import * as URL from '../../helpers/api/apiEndPoint';

const api = new APICore();

function categoryData(params: any): any {
    const { search,limit,page } = params?.data

    return api.get(`${URL.GET_CATEGORY}?search=${encodeURIComponent(search)}&limit=${limit}&page=${page}`);
}

function subCategoryData(params: any): any {
    const { search,limit,page } = params?.data

    return api.get(`${URL.GET_SUB_CATEGORY}?search=${encodeURIComponent(search)}&limit=${limit}&page=${page}`);
}



function createCategoryData(params: any): any {
    const { data } = params;
    return api.create(URL.CREATE_CATEGORY, data);
}
function updateCategoryData(params: any): any {
    const { data } = params;
    return api.update(URL.UPDATE_CATEGORY, data);
}
function deleteCategoryData(params: any): any {
    const { data } = params;
    return api.create(URL.DELETE_CATEGORY, data);
}

export {
    categoryData,subCategoryData, createCategoryData, updateCategoryData, deleteCategoryData,
};