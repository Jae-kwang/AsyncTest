import { useSelector, useDispatch } from 'react-redux';
import { increaseAsync } from '../thunk/counterThunk';

const Counter = () => {
  const count = useSelector(state => state);
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch({ type: 'INCREMENT_ASYNC_SAGA' })}>
        [SAGA] Increment after 1 second
      </button>
      <button onClick={() => dispatch({ type: 'INCREMENT_ASYNC_EPIC' })}>
        [EPIC] Increment after 1 second
      </button>
      <button onClick={() => dispatch(increaseAsync())}>
        [Thunk] Increment after 1 second
      </button>
      <p>{count}</p>
    </div>
  )
}

export default Counter; 