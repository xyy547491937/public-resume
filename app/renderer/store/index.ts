import logger from "redux-logger"

import RcReduxModel from "rc-redux-model"

import {createStore,applyMiddleware,combineReducers} from "redux"

import globalModel from "./globalModel"

import resumeModel from "./resumeModel"

import templateModel from "./templateModel"
const reduxModel =new RcReduxModel([globalModel,templateModel,resumeModel]);

const reducerList =combineReducers(reduxModel.reducers);

export default  createStore(reducerList,applyMiddleware(reduxModel.thunk,logger))