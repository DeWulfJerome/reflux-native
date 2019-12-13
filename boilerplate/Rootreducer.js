module.exports = function() {
  const reducer = `
  import {combineReducers} from 'redux';
  import mainReducer from './reducers/mainReducer';
    
  const rootReducer = combineReducers({
    mainReducer
  });
    
  export default rootReducer;`;
  return reducer;
};
