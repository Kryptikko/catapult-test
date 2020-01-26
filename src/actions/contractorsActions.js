import {
  FETCH_INVITED_CONTRACTS_LIST,
} from './constants.js'
import {
  fetchInvitedContractsList,
} from '../lib/requests/webapi.js'

export function fetchContractorByRoleId(roleId) {
  return {
    type: FETCH_INVITED_CONTRACTS_LIST,
    meta: {roleId: roleId},
    payload: fetchInvitedContractsList(roleId),
  }
}
