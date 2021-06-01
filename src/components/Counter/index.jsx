import React, { useState } from 'react';
import * as Styled from './style';

const Counter = ({ vertical = false }) => {
  const [count, setCount] = useState(1);
  return (
    <Styled.Counter vertical={vertical}>
      <Styled.MinusButton
        vertical={vertical}
        onClick={() => (count > 1 ? setCount(count - 1) : null)}
      >
        <Styled.MinusIcon />
      </Styled.MinusButton>
      <Styled.CounterNumber>{count}</Styled.CounterNumber>
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
