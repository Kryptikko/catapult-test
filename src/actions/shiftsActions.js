import {
  FETCH_SHIFTS_LIST,
  FILTER_SHIFTS_BY_START_TIME,
  FILTER_SHIFTS_BY_JOB_TYPE,
} from './constants.js'
import {
  fetchShiftsList,
} from '../lib/requests/webapi.js'


export function fetchShifts() {
  return {
    type: FETCH_SHIFTS_LIST,
    payload: fetchShiftsList(),
  }
}

export function filterByJobType(val) {
  return {
    type: FILTER_SHIFTS_BY_JOB_TYPE,
    payload: val
  }
}

export function filterByStartTime(val) {
  return {
    type: FILTER_SHIFTS_BY_START_TIME,
    payload: val
  }
}
