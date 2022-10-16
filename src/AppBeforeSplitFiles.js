import React from 'react';
import './style.css';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

// 이런식으로 스토어 역할을 잘게 쪼갤 수 있으며 여러개의 슬라이스를 하나의 스토어로 묶어 주는게 configureStore 이다.
const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      console.log(action);
      // state.value = state.value + action.step;
      state.value = state.value + action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
/*
function reducer(state, action) {
  if (action.type === 'up') {
    console.log('up!!');
    return { ...state, value: state.value + action.step };
  }
  return state;
}

const initialState = { value: 0 };

const store = createStore(reducer, initialState);
*/

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.value;
  });
  return (
    <div>
      <button
        onClick={() => {
          // dispatch({ type: 'counterSlice/up', step: 2 });
          // redux toolkit 에서는 reduce 함수들을 참고해서 자동으로 action 을 만들어내는 actionCreate 를 생성해준다. 그래서 아래처럼 사용 가능하다.
          dispatch(counterSlice.actions.up(2));
        }}
      >
        +
      </button>
      {count}
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}
