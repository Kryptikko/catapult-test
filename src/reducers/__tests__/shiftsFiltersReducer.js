import shiftsFiltersReducer from '../shiftsFiltersReducer'

test("shiftsFiltersReducer should populate the \
job type options with unique ids and the \"all\" option", () => {
  const action = {
    type: "FETCH_SHIFTS_LIST_FULFILLED",
    payload: {
      data: [{
        jobType: "unique"
      }, {
        jobType: "unique"
      }, {
        jobType: "unique"
      }]
    }
  };
  const state = shiftsFiltersReducer(null, action);

  expect(state.jobTypeOptions.length).toEqual(2);
  expect(state.jobTypeOptions[0]).toEqual(expect.objectContaining({
    text: "All",
    value: "ALL",
  }));
  expect(state.jobTypeOptions[1]).toEqual(expect.objectContaining({
    text: "unique",
    value: "unique",
  }));
});

test("shiftsFiltersReducer should return ALL as default job type option", () => {
  const action = {
    type: "FETCH_SHIFTS_LIST_FULFILLED",
    payload: {data:[]}
  };
  const state = shiftsFiltersReducer(null, action);
  expect(state.jobTypeValue).toEqual("ALL");
});

test("shiftsFiltersReducer should return ALL as default start time option", () => {
  const action = {
    type: "FETCH_SHIFTS_LIST_FULFILLED",
    payload: {data:[]}
  };
  const state = shiftsFiltersReducer(null, action);
  expect(state.jobTypeValue).toEqual("ALL");
});

test("shiftsFiltersReducer should persist the job type filter value", () => {
  const action = {
    type: "FILTER_SHIFTS_BY_JOB_TYPE",
    payload: "new value",
  }
  const state = shiftsFiltersReducer(null, action);
  expect(state.jobTypeValue).toEqual(action.payload);
});

test("shiftsFiltersReducer should persist the start time filter value", () => {
  const action = {
    type: "FILTER_SHIFTS_BY_START_TIME",
    payload: "new value",
  }
  const state = shiftsFiltersReducer(null, action);
  expect(state.startTimeValue).toEqual(action.payload);
});
