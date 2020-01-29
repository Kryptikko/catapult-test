import {TIME_OPTIONS} from './../lib/timeutils'
const ALL_JOB_TYPES = "ALL"

const InitialState = {
  jobTypeOptions: [],
  jobTypeValue: ALL_JOB_TYPES,
  startTimeOptions: [{
    value: TIME_OPTIONS.ALL,
    text: "All",
  },{
    value: TIME_OPTIONS.AM,
    text: "AM",
  },{
    value: TIME_OPTIONS.PM,
    text: "PM",
  }],
  startTimeValue: TIME_OPTIONS.ALL,
}

const shiftsFiltersReducer = (state = InitialState, action) => {
  switch(action.type) {
    case 'FETCH_SHIFTS_LIST_FULFILLED': {
      const {payload: {data}} = action
      const allOpt = {value: ALL_JOB_TYPES, text: "All"};
      let options = data
        .map(shift => shift.jobType)
        // distinct
        .filter((job, idx, self) => self.indexOf(job) == idx)
        .map(job => {return {value: job, text: job}})
      options.unshift(allOpt)

      return Object.assign({}, state, {
        jobTypeOptions: options,
        jobTypeValue: allOpt.value
      });
    }

    case 'FILTER_SHIFTS_BY_JOB_TYPE': {
      const {payload} = action
      return Object.assign({}, state, {
        jobTypeValue: payload
      });
    }

    case 'FILTER_SHIFTS_BY_START_TIME': {
      const {payload} = action
      return Object.assign({}, state, {
        startTimeValue: payload
      });
    }

    default:
      return state
  }
}

export default shiftsFiltersReducer
