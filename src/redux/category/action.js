//------------------------------------A C T I O N S----------------------------------------------------
// @flow
import { CategoryActionTypes } from './constants';

type AuthAction = { type: string, payload: {} | string };

// common success
export const getCategoryActions = (data): AuthAction => ({
    type: CategoryActionTypes.CATEGORY_DATA_FIRST,
    data
});
export const getSubCategoryActions = (data): AuthAction => ({
    type: CategoryActionTypes.SUB_CATEGORY_DATA_FIRST,
    data
});

// export const createCategoryActions = (data): AuthAction => ({
//     type: CategoryActionTypes.CREATE_CATEGORY_FIRST,
//     data
// });

// export const updateCategoryActions = (data): AuthAction => ({
//     type: CategoryActionTypes.UPDATE_CATEGORY_DATA_FIRST,
//     data
// });

// export const deleteCategoryActions = (data): AuthAction => ({
//     type: CategoryActionTypes.DELETE_CATEGORY_DATA_FIRST,
//     data
// });

export const resetCategory = () => ({
    type: CategoryActionTypes.STATE_EMPTY_FIRST,
});