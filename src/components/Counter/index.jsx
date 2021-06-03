import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../../store/ducks/cart';
import * as Styled from './style';

const Counter = ({ vertical = false, item, amount = 1, inCart = false }) => {
  const [count, setCount] = useState(amount);
  const dispatch = useDispatch();

  function handleDispatchCounter() {
    dispatch(
      addCartItem({ ...item, quantity: count, uniqueId: new Date().getTime() }),
    );
  }

  return (
    <Styled.Counter vertical={vertical}>
      <Styled.MinusButton
        vertical={vertical}
        onClick={() => (count > 1 ? setCount(count - 1) : null)}
      >
        <Styled.MinusIcon />
      </Styled.MinusButton>

      <Styled.CounterNumber
        onClick={() => (inCart ? null : handleDispatchCounter())}
      >
        {count}
      </Styled.CounterNumber>

      <Styled.PlusButton
        onClick={() => setCount(count + 1)}
        vertical={vertical}
      >
        <Styled.PlusIcon />
      </Styled.PlusButton>
    </Styled.Counter>
  );
};

export default Counter;
