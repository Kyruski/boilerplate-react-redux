import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions";

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  const [inc, dec] = [increment(), decrement()];

  return (
    <>
      Counter is at {count}.
      <button onClick={() => dispatch(inc)}>Increment</button>
      <button onClick={() => dispatch(dec)}>Decrement</button>
    </>
  );
};

export default Counter;
