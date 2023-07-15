import { CounterWrapper, CounterDisplay } from "./CounterStyles";

const Counter = ({
  incrementItem,
  decrementItem,
  amount,
}) => {

  return (
    <CounterWrapper>
      <button onClick={decrementItem}>-</button>
      <CounterDisplay>{amount}</CounterDisplay>
      <button onClick={incrementItem}>+</button>
    </CounterWrapper>
  );
};

export default Counter;