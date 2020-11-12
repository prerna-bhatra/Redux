import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/createStore';
import InputSection from './components/InputSection';
import EmpsSection from './components/EmpsSection';
import './App.css';

function App() {
  return (
    <Provider store={store}>
     <center><h1 className="navb">GTX TECHNOLOGY ASSIGNMENT</h1></center>
      <div className="main">
      <div className="row">
      <div className="col-md-3">
         <InputSection />
      </div>
      <div className="col-md-9">
        <EmpsSection />
      </div>
         </div>
         </div>
    </Provider>    
  );
}

export default App;
