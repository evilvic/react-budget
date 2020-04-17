import React from 'react'
import Debt from './Debt'
import PropTypes from 'prop-types'

const List = ({ gastos }) => (
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {gastos.map(gasto => (
            <Debt 
                key={gasto.id}
                gasto={gasto}
            />
        ))}
    </div>
)

List.propTypes = {
    gastos: PropTypes.array.isRequired
}

export default List
