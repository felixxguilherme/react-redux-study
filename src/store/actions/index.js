export function loadIbgeData(estados) {
    return {
        type: 'LOAD_IBGEDATA',
        payload: estados
    }
}

export function loadMunicipios(municipios) {
    return {
        type: 'GET_MUNICIPIOS',
        payload: municipios
    }
}

export function setCurrentItem(item) {
    return {
        type: 'SET_CURRENT_ITEM',
        payload: item
    }
}