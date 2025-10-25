import { call, put, takeEvery, all } from "redux-saga/effects";
import { fetchTasks, addTaskApi } from "../api/mockApi";
import { setTasks, ADD_TASK } from "./actions";

// 1️⃣ Load tasks when app starts
function* loadTasksSaga() {
  const tasks = yield call(fetchTasks);
  yield put(setTasks(tasks));
}

// 2️⃣ Add new task when user submits form
function* addTaskSaga(action) {
  const newTask = yield call(addTaskApi, action.payload);
  const tasks = yield call(fetchTasks);
  yield put(setTasks(tasks)); // refresh list
}

// 3️⃣ Watch for actions
function* watchTasks() {
  yield takeEvery("LOAD_TASKS", loadTasksSaga);
  yield takeEvery(ADD_TASK, addTaskSaga);
}

// 4️⃣ Root saga
export default function* rootSaga() {
  yield all([watchTasks()]);
}
