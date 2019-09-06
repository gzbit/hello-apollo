import gql from 'graphql-tag'
import { PropTypes } from 'prop-types'
import React from 'react'
import { Query } from 'react-apollo'

import Decrement from './Decrement'
import Increment from './Increment'

const CounterView = ({ counter }) => (
    <div>
        <Decrement />
        <div>{counter}</div>
        <Increment />
    </div>
)

CounterView.propTypes = {
    counter: PropTypes.number.isRequired,
}

const GET_COUNTER = gql`
    {
        counter @client
    }
`

const Counter = () => (
    <Query query={GET_COUNTER}>
        {
            ({ data }) => <CounterView {...data} />
        }
    </Query>
)

export default Counter