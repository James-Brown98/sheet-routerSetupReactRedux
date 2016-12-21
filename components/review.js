import React from 'react'
import Nav from './nav/nav'

export default ({state, dispatch}) =>
  <div>
    <Nav dispatch={dispatch}/>
    <h1>Your route is {state.route}</h1>
  </div>
