import {NameSpace} from '../reducer';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getAuthorizationInfo = (state) => state[NameSpace.USER].authInfo;
