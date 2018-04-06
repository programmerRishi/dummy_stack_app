import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

const reducers = combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});

export default reducers;
/*
This code can also be written as:-

import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
  libraries: LibraryReducer
});

NOTE:- HERE the exported module has no name so it can be imported with any
 name in the file where it is imported.

*/
