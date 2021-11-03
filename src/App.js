import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Todo from './components/todo/Todo';
import Nottodo from './components/nottodo/Nottodo';
import { Provider } from 'react-redux';
import store from './store/store.js';




export default function App() {



  return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
        		<div className="container">
              <Route exact path="/">
                <Todo  />
              </Route>
              <Route path="/nottodo">
                <Nottodo />
              </Route>
        		</div>
          </div>
        </Router>
      </Provider>
      
  );
  
}


