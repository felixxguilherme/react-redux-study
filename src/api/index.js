import axios from 'axios'
import store from '../store'

import { loadIbgeData, loadMunicipios, setCurrentItem } from '../store/actions'

export function getData() {
    return axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(response => {
            store.dispatch(loadIbgeData(response.data))
        })
}

export function getMunicipios(uf) {
    return axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios`)
        .then(response => {
            store.dispatch(loadMunicipios(response.data))
        })
}

export function setCurrentUf(uf) {
    return store.dispatch(setCurrentItem(uf))       
}