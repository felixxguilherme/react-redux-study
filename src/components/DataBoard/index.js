import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as ibgeAPI from '../../api'

class DataBoard extends Component {

    state = {
        currentUF: [],
        currentMun: 'aloalo'
    }

    toggleItem = (event) => {        
        this.setState({ currentUF: event.target.value.toString() })
    }

    showInfo = (event) => {
        this.setState({ currentMun: event.target.value })
    }

    componentDidMount () {       
        ibgeAPI.getData();
        ibgeAPI.getMunicipios();    
    }

    render () {
        return (
            <div className="box__principal">

                <div className="box__principal_select">
                    <select onChange={this.toggleItem}>
                        {this.props.estados.map(item => (
                            <option key={item.id} value={item.sigla}>{item.nome}</option>
                        ))}
                    </select>
                    <select onChange={this.showInfo}>
                        {this.props.municipios.filter(item => item.microrregiao.mesorregiao.UF.sigla === this.state.currentUF).map(item => (
                            <option key={item.id} value={item.nome}>{item.nome}</option>
                        ))}
                    </select>
                </div>
               
                <div className="box__infos">                
                    {this.props.municipios.filter(item => item.nome === this.state.currentMun).map(item => (
                        <div key={item.id}>
                            <div className="box__infos_itens">
                                <label>Nome do Município</label>
                                <p>{item.nome}</p>
                            </div>
                            <div className="box__infos_itens">
                                <label>Microrregião</label>
                                <p>{item.microrregiao.nome}</p>
                            </div>
                            <div className="box__infos_itens">
                                <label>Mesorregião</label>
                                <p>{item.microrregiao.mesorregiao.nome}</p>
                            </div>
                            <div className="box__infos_itens">
                                <label>Unidade da Federação</label>
                                <p>{item.microrregiao.mesorregiao.UF.nome}</p>
                            </div>
                            <div className="box__infos_itens">
                                <label>Região</label>
                                <p>{item.microrregiao.mesorregiao.UF.regiao.nome}</p>
                            </div>
                        </div>
                    ))}
                </div>    
            </div>
        )
    }

}

const mapStateToProps = state => {    
    return {
        estados: state.ibgeState.estados,
        municipios: state.ibgeState.municipios
    }
}

export default connect(mapStateToProps)(DataBoard)
