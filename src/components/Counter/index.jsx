import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCartItem, sumCartItem, subCartItem } from '../../store/ducks/cart';
import * as Styled from './style';

const Counter = ({
  vertical = false,
  item,
  amount = 1,
  inCart = false,
  cartItemId,
}) => {
  const [count, setCount] = useState(amount);
  const dispatch = useDispatch();

  function handleDispatchCounter() {
    dispatch(
      addCartItem({ ...item, quantity: count, uniqueId: new Date().getTime() }),
    );
  }

  function handleSumItem() {
    if (inCart) {
      setCount(count + 1);
      dispatch(sumCartItem(cartItemId));
    } else {
      setCount(count + 1);
    }
  }

  function handleSubItem() {
    if (inCart) {
      if (count > 1) {
        setCount(count - 1);
        dispatch(subCartItem(cartItemId));
      }
    } else if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <Styled.Counter vertical={vertical}>
      <Styled.MinusButton vertical={vertical} onClick={() => handleSubItem()}>
        <Styled.MinusIcon />
      </Styled.MinusButton>

      <Styled.CounterNumber
        onClick={() => (inCart ? null : handleDispatchCounter())}
      >
        {count}
      </Styled.CounterNumber>

      <Styled.PlusButton vertical={vertical} onClick={() => handleSumItem()}>
        <Styled.PlusIcon />
      </Styled.PlusButton>
    </Styled.Counter>
  );
};

export default Counter;
