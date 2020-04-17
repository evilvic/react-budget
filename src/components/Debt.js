import React from 'react'
import PropTypes from 'prop-types'

const Debt = ({gasto}) => (
    <li className="gastos">
        <p>
            {gasto.nombre}

        <span className="gasto">$ {gasto.cantidad}</span>

        </p>
    </li>
)

Debt.propTypes = {
    gasto: PropTypes.object.isRequired
}

export default Debt
