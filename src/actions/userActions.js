/**
 * Created by Dan Stevenson on 7/30/2017.
 */
import * as types from './actionTypes';
import axios from 'axios';
import {usersApiUrl, managedVendorApiUrl} from '../components/common/constants';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function loadUsernameSuccess(username){
     return {type: types.LOAD_USERNAME_SUCCESS, username};
 }

 export function loadUsername() {
     return function (dispatch) {
         dispatch(beginAjaxCall());
         let config = {withCredentials: true};
         return axios.get(usersApiUrl + 'api/username', config).then(username => {
             dispatch(loadUsernameSuccess(username.data));
         }).catch(error => {
             dispatch(ajaxCallError(error));
             throw(error);
         });
     };
 }

 export function loadVendorsSuccess(vendors){
      return {type: types.LOAD_VENDORS_SUCCESS, vendors};
  }

  export function loadVendors(criteria) {
      return function (dispatch) {
          dispatch(beginAjaxCall());
          let config = {
            headers: {
              'Cache-control': 'no-cache',
              'Pragma': 'no-cache',
              'Expires': 0
            }
          };
          return axios.get(encodeURI(managedVendorApiUrl + 'api/aderant/vendors/' +
                            criteria.trim()), config).then(vendors => {
              dispatch(loadVendorsSuccess(vendors.data));
          }).catch(error => {
              dispatch(ajaxCallError(error));
              throw(error);
          });
      };
  }

  export function loadRolesSuccess(roles){
       return {type: types.LOAD_ROLES_SUCCESS, roles};
   }

   export function loadRoles() {
       return function (dispatch) {
           dispatch(beginAjaxCall());

           return axios.get(managedVendorApiUrl + 'api/aderant/roles/').then(roles => {
               dispatch(loadRolesSuccess(roles.data));
           }).catch(error => {
               dispatch(ajaxCallError(error));
               throw(error);
           });
       };
   }
