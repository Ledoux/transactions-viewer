import { all } from 'redux-saga/effects'

import { watchModalActions } from './modal'
import { watchDataActions } from './data'

function * rootSaga () {
  yield all([
    watchModalActions(),
    watchDataActions()
  ])
}

export default rootSaga
