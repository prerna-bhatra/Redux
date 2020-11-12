import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/createStore';
import InputSection from './components/InputSection';
import EmpsSection from './components/EmpsSection';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>GTX TECHNOLOGY</h1>
        <InputSection />
        <div className="line"></div>
        <EmpsSection />
      </div>
    </Provider>    
  );
}

export default App;
