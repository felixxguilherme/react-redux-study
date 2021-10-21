const rootReducer = function(state = [], action) {
    switch(action.type) {
        case 'LOAD_IBGEDATA':
            return { ...state, estados: action.payload }
        case 'GET_MUNICIPIOS':
            return { ...state, municipios: action.payload }
        case 'SET_CURRENT_ITEM':
            return { ...state, currentItem: action.payload }
        default:
            return state
        }
}

export default rootReducer