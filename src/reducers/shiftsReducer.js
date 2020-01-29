const InitialState = {
  shiftsList: [],
  pendingShifts: [],
  fetchingShifts: false,
}


const shiftsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'FETCH_SHIFTS_LIST_FULFILLED': {
      const {payload: {data}} = action
      return Object.assign({}, state, {
        fetchingShifts: false,
        shiftsList: data
      })
    }

    case 'FETCH_SHIFTS_LIST_PENDING': {
      return Object.assign({}, state, {fetchingShifts: true})
    }

    case 'FETCH_INVITED_CONTRACTS_LIST_FULFILLED': {
      var {meta} = action;
      const pendingShifts = state.pendingShifts.slice()
      pendingShifts.splice(pendingShifts.indexOf(meta.roleId), 1);
      return Object.assign({}, state, {pendingShifts: pendingShifts})
    }

    case 'FETCH_INVITED_CONTRACTS_LIST_PENDING': {
      var {meta} = action;
      const pendingShifts = state.pendingShifts.slice()
      pendingShifts.push(meta.roleId);
      return Object.assign({}, state, {pendingShifts: pendingShifts})
    }

    default:
      return state
  }
}

export default shiftsReducer
