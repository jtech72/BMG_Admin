import { APICore } from "../../helpers/api/apiCore";
import * as URL from "../../helpers/api/apiEndPoint";
const api = new APICore();

export function getTicketsApi(params: any): any {
  const { userId, search, limit, page } = params?.data;
  return api.get(`${URL.GET_TICKETS}?limit=${limit}&page=${page}`);
};
// userId=${userId}&search=${encodeURIComponent(search)}&
export function addTicketApi(params: any): any {
  const { data } = params;
  return api.create(`${URL.ADD_TICKET}`, data);
}
export function updateTicketApi(params: any): any {
  const { data } = params;
  return api.update(`${URL.UPDATE_TICKET}`, data);
}
export function getChatByIdApi(params: any): any {
  const { data } = params;
  return api.get(`${URL.GET_CHAT_BY_ID}/${data?.id}`);
}
