// This service abstracts away the specific network request tech and config that we're using.
// This keeps all API calls short and consistent.
// If you are already using jQuery, you can use it to make AJAX calls here instead since
// Axios weighs about 20k. But note that jQuery's promise implementation is quirky.
import axios from 'axios';

const inDevelopment = window.location.hostname === 'localhost';

function getLoginApiBaseUrl() {
  // Note that this baseUrl assumes you're running CarDashboard via IIS at motosnap.com via a hosts file entry.
  // See https://github.com/cox-auto-kc/fusion-starter#initial-machine-setup for more info.
  return inDevelopment ? 'http://betahrm9h02.na.autotrader.int:81/api/' : '/CarDashboard/';
}

function getCustomerApiBaseUrl() {
  // Note that this baseUrl assumes you're running CarDashboard via IIS at motosnap.com via a hosts file entry.
  // See https://github.com/cox-auto-kc/fusion-starter#initial-machine-setup for more info.
  return inDevelopment ? 'http://wsvc.qa.vinsolutions.com:80/Vin.Api.Customer.WebHost/api/v1/' : '/CarDashboard/';
}

function submitAjaxCall(url, method, data, token) {
  return axios({
    method: method,
    url: url,
    data: data,
    responseType: 'json',
    withCredentials: true,
    headers: {
      'www-authenticate': 'VinTokenAuthenticationProvider',
      'Accept': 'application/json',
      'Vin-Token': token
    }
  });
}

function get(url, token) { // eslint-disable-line no-unused-vars
  return submitAjaxCall(url, 'get', null, token);
}

function post(url, data, token) { // eslint-disable-line no-unused-vars
  return submitAjaxCall(url, 'post', data, token);
}

// The API calls your app uses go down here. Export each function so they can be imported for use elsewhere...
export function getCustomers() {
  return get('API/CRMServiceBase/v1/users/search/');
}

export function searchCustomers(search) {
  const url = getCustomerApiBaseUrl() + 'Customer/Search';
  return post(url,
    {
      'searchText': search,
      'resultLimit': 0,
      'isMasked': true,
      'fieldMask': 0,
      'leadStatusTypeId': 0
    }
  );
}

export function login() {
  const url = 'http://betahrm9h02.na.autotrader.int:81/api/Login';
  const data = { login: "chouse1", password: "Vin123456" };
  return post(url, data);
}
