import * as actions from '../actions/actions';

import { put, takeLatest, all } from 'redux-saga/effects';
import { fetchAllSessions } from '../../services/ApiService';

function* fetchHistory() {
  const json = yield fetchAllSessions()
    .then(response => response.json());
  yield put({ type: actions.HISTORY_RECEIVED, json: json.history, });
}
function* actionWatcher() {
  yield takeLatest(actions.FETCH_HISTORY, fetchHistory)
}
export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}