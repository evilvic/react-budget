import React, { useState } from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

const Question = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

    const [ cantidad, guardarCantidad ] = useState(0)
    const [ error, guardarError ] = useState(false)

    const definirPresupuesto = ({ target }) => {
        guardarCantidad( parseInt(target.value, 10) )
    }

    const agregarPresupuesto = e => {

        e.preventDefault()

        if (cantidad < 1 || isNaN( cantidad )) {
            guardarError(true)
            return
        }

        guardarError(false)

        guardarPresupuesto(cantidad)
        guardarRestante(cantidad)
        actualizarPregunta(false)

    }

    return (
        <>
            <h2>Coloca tu presupuesto</h2>

            { error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}

            <form onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto" 
                    onChange={definirPresupuesto}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </>
    )
}

Question.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired,
}

export default Question
