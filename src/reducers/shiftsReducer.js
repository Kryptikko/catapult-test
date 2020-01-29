const InitialState = {
  shiftsList: [],
  fetchingShifts: false,
}


const _shiftPatchGenerator = (roleId, updateObj) => (item) => {
  if (item.roleId == roleId) {
    item = Object.assign({}, item, updateObj);
  }
  return item;
};

const _applyContractorBase = (item) => {
  return Object.assign({}, {
    fetchContractors: false,
    invitedContractsList: [],
  }, item);
};

const shiftsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'FETCH_SHIFTS_LIST_FULFILLED': {
      const {payload: {data}} = action
      return Object.assign({}, state, {
        fetchingShifts: false,
        shiftsList: data.map(_applyContractorBase)
      })
    }

    case 'FETCH_SHIFTS_LIST_PENDING': {
      return Object.assign({}, state, {fetchingShifts: true})
    }

    case 'FETCH_INVITED_CONTRACTS_LIST_FULFILLED': {
      var {meta, payload} = action;

      const updatedShiftList = state.shiftsList.map(_shiftPatchGenerator(
          meta.roleId,
          {
            fetchContractors: false,
            invitedContractsList: payload.data,
          }
       ));
      return Object.assign({}, state, {shiftsList: updatedShiftList})
    }

    case 'FETCH_INVITED_CONTRACTS_LIST_PENDING': {
      var {meta} = action;
      const updatedShiftList = state.shiftsList.map(_shiftPatchGenerator(
          meta.roleId,
          {
            fetchContractors: true,
          }
       ));
      return Object.assign({}, state, {shiftsList: updatedShiftList})
    }

    default:
      return state
  }
}

export default shiftsReducer
