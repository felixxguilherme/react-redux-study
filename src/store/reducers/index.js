import { combineReducers } from "redux";

import rootReducer from './rootReducer'

var reducers = combineReducers({
    ibgeState: rootReducer
})

export default reducers