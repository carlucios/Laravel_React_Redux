import {createStore, applyMiddleware} from "redux";
import rootReducer from './reducers/rootReducer';
import ReduxThunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));