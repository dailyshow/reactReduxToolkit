import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Provider, useSelector, useDispatch} from 'react-redux';
import store from './store';
import {up, down} from './counterSlice';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.value;
  });
  return (
    <div>
      <button
        onClick={() => {
          // dispatch(counterSlice.actions.up(2));
          dispatch(up(2));
        }}>+</button>
      {count}
      <button
        onClick={() => {
          dispatch(down(2));
        }}>-</button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
