//------------------------------------S A G A---------------------------------------------------------------
import { all, fork, put, takeEvery, call, takeLatest } from 'redux-saga/effects';
import { LeadActionTypes } from './constants';

import { getLeadApi } from './api';
/**
 * Login the user
 * @param {*} payload - username and password
 */

// products
function* getLeadDataFunction(data) {
    try {
        yield put({
            type: LeadActionTypes.AUCTION_LEAD_LOADING,
            payload: {},
        });
        const response = yield call(getLeadApi, data);
        if (response?.status === 200) {
            yield put({
                type: LeadActionTypes.AUCTION_LEAD_SUCCESS,
                payload: { ...response.data },
            });
        } else {
            yield put({
                type: LeadActionTypes.AUCTION_LEAD_ERROR,
                payload: { ...response.data },
            });
        }
    } catch (error) {
        yield put({
            type: LeadActionTypes.AUCTION_LEAD_ERROR,
            payload: error,
        });
    }
}

export function* watchLeadData() {
    yield takeEvery(LeadActionTypes.AUCTION_LEAD_FIRST, getLeadDataFunction);
}

function* leadSaga() {
    yield all([
        fork(watchLeadData)
    ]);
}

export default leadSaga;


