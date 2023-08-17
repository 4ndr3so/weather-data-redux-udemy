import { applyMiddleware, compose, configureStore, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from '../reducer';
import { city } from '../reducer/city';


const initialState={
    city:"Bogota,col"
};

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(reducer,initialState,composeEnhancers(applyMiddleware(thunk)))
