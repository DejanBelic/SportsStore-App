import { createStore } from 'redux';
import { shopReducer } from './shopReducer';

export const sportsStoreDataStore = createStore(shopReducer);