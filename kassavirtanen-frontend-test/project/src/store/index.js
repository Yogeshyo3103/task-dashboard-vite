import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { taskReducer } from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(taskReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
