import shiftsReducer from '../shiftsReducer'

test("shiftsReducer should apply the base shift model to all shifts", () => {
  const action = {
    type: "FETCH_SHIFTS_LIST_FULFILLED",
    payload: {
      data: [{}]
    }
  };
  const state = shiftsReducer(null, action);

  expect(state.shiftsList[0]).toEqual(expect.objectContaining({
    fetchContractors: false,
    invitedContractsList: [],
  }));
});

test("shiftsReducer should patch the contractor list based on the shift roleId", () => {
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
    shiftsList: [{
      roleId: 1,
    },{
      roleId: 1337,
    }],
    fetchingShifts: false,
  }
  const state = shiftsReducer(initialState, action);

  expect(state.shiftsList[1].fetchContractors)
    .toEqual(false);
  expect(state.shiftsList[1].invitedContractsList)
    .toEqual(expect.arrayContaining(contractorList));
});
