import shiftsReducer from '../shiftsReducer'

test("shiftsReducer should flag shifts as pending on fetching contracts list", () => {
  const action = {
    type: "FETCH_INVITED_CONTRACTS_LIST_PENDING",
    meta: {
      roleId: 1337
    }
  };
  const initState = {
    pendingShifts: []
  }
  const state = shiftsReducer(initState, action);

  expect(state.pendingShifts).toEqual(expect.arrayContaining([1337]));
});

test("shiftsReducer should shifts as no longer pending after fetching their contractor list", () => {
  const contractorList = [{
    contractor: "data"
  }];
  const action = {
    type: "FETCH_INVITED_CONTRACTS_LIST_FULFILLED",
    meta: {
      roleId: 1337
    },
    payload: {
      data: contractorList
    }
  };
  const initialState = {
    pendingShifts: [1337],
  }
  const state = shiftsReducer(initialState, action);

  expect(state.pendingShifts.length).toEqual(0);
});
