import gql from 'graphql-tag'
import { PropTypes } from 'prop-types'
import React from 'react'
import { Mutation } from 'react-apollo'

const DecrementView = ({ onIncrement }) => (
    <button onClick={onIncrement}> <b> + </b> </button>
)

DecrementView.propTypes = {
    onIncrement : PropTypes.func.isRequired
}

const INCREMENT_COUNTER = gql`
    mutation {
        incrementCounter @client
    }
`

const Increment = () => (
    <Mutation mutation={INCREMENT_COUNTER}>
        {incrementCounter => <DecrementView onIncrement={incrementCounter} />}
    </Mutation>
)

export default Increment