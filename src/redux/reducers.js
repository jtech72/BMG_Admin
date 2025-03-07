// @flow
import { combineReducers } from 'redux';

import Auth from './auth/reducers';

import Layout from './layout/reducers';

import { dashboardDataReducer } from './dashboard/reducers';
import { categoryDataReducer, subCategoryDataReducer, createCategoryDataReducer, updatecategoryDataReducer, deletecategoryDataReducer, } from './category/reducers'

import {
  productDataReducer, createProductDataReducer, updateProductDataReducer, deleteProductDataReducer,
} from './products/reducers';
import {     faqDataReducer, createFaqDataReducer, updateFaqDataReducer, deleteFaqDataReducer} from './faq/reducers';
import { userDataReducer } from './user/reducers';
import { getOrderDataReducer } from './orders/reducers';
import { leadDataReducer } from './auctionLead/reducers';
import { enquiryDataReducer } from './enquiry/reducers';
import { getSupportDataReducer, updateSupportDataReducer } from './help&support/reducers';
export default (combineReducers({
  Auth,
  Layout,
  dashboardDataReducer,
  categoryDataReducer, subCategoryDataReducer, createCategoryDataReducer, updatecategoryDataReducer, deletecategoryDataReducer,
  productDataReducer, createProductDataReducer, updateProductDataReducer, deleteProductDataReducer,
  faqDataReducer, createFaqDataReducer, updateFaqDataReducer, deleteFaqDataReducer,
  userDataReducer,
  leadDataReducer,
  getOrderDataReducer,
  enquiryDataReducer,
  getSupportDataReducer,updateSupportDataReducer
}): any);
