import {combineReducers} from 'redux'
import createStore from './createStore'
import shiftsReducer from './shiftsReducer'
import shiftsFiltersReducer from './shiftsFiltersReducer'


const catapultReducer = combineReducers({
  shiftsFilters: shiftsFiltersReducer,
  shifts: shiftsReducer,
})

export default createStore(catapultReducer)
