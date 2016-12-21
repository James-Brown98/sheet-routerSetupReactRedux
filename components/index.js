import React from 'react'
import Nav from './nav/nav'

export default ({state, dispatch}) =>
  <div>
    <Nav dispatch={dispatch}/>
    <h1>Home</h1>
  </div>
