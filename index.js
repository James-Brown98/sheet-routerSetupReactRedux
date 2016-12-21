import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Router from 'sheet-router'

import reducer from './reducer'

import Home from './components'
import Places from './components/places'
import Review from './components/review'

const initialState = {
  name: 'Brady Gillies',
  route: '/'
}

const { getState, dispatch, subscribe } = createStore(reducer, initialState)

const route = Router({ default: '/404' }, [
  ['/', (params) => Home],
  ['/places', (params) => Places],
  ['/review', (params) => Review]
])

subscribe(() => {
  const Component = route(getState().route)
  render(<Component state={getState()} dispatch={dispatch} />, document.querySelector('main'))
})

dispatch({type: 'INIT'})
