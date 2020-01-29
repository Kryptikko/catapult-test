import {combineReducers} from 'redux'
import createStore from './createStore'
import shiftsReducer from './shiftsReducer'
import shiftsFiltersReducer from './shiftsFiltersReducer'
import contractorsReducer from './contractorsReducer'


const catapultReducer = combineReducers({
  shiftsFilters: shiftsFiltersReducer,
  shifts: shiftsReducer,
  contractors: contractorsReducer,
})

export default createStore(catapultReducer)
