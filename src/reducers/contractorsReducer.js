const InitialState = {
  contractorsList: [],
}

const contractorsReducer = (state = InitialState, action) => {
  switch (action.type) {

    case 'FETCH_INVITED_CONTRACTS_LIST_FULFILLED': {
      var {payload: {data}} = action;
      let contractors = state.contractorsList
        .slice()
        .concat(data)
        // distinct results
        .filter((job, idx, self) => self.indexOf(job) == idx);
      return Object.assign({}, state, {contractorsList: contractors})
    }

    default:
      return state
  }
}


export default contractorsReducer
