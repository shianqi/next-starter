import { createActions } from 'redux-actions'
import { tryToFetch } from 'redux-control'
import { ThunkAction } from 'redux-thunk'
import { RootStateTypes } from 'TYPES/redux'

const { initApp } = createActions('INIT_APP')

const getDate = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({ name: 'redux' })
    }, 1000)
  })

const tryToFetchLocationsConfig: () => ThunkAction<
  void,
  RootStateTypes,
  void,
  any
> = () =>
  tryToFetch({
    path: 'app.load',
    fetchFunc: getDate,
    ttl: 10000
  })

export default {
  initApp,
  tryToFetchLocationsConfig
}
