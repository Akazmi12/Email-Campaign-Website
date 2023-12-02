import {creatStore} from 'redux';
import {loginReducer} from './loginReducer';

export const store = createStore(loginReducer);