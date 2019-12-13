module.exports = function() {
  const app = `import React, { useEffect } from "react";
    import { Provider } from "react-redux";
    import { createStore, applyMiddleware } from "redux";
    import thunk from "redux-thunk";
    
    import reducers from "./model/rootReducer";
    
    import AppContainer from "./navigation/Appstack";
    
    const middleWare = applyMiddleware(thunk);
    const store = createStore(reducers, middleWare);
    
    const App = () => {
      // Disable warnings
      useEffect(() => {
        console.disableYellowBox = true;
      });
    
      return (
        <Provider store={store}>
          <AppContainer></AppContainer>
        </Provider>
      );
    };
    
    export default App;`;
  return app;
};
