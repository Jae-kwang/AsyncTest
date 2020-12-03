const increase = () => ({ type: 'INCREMENT' });

// Thunk의 경우 action대한 응답은 불가능하다.
export const increaseAsync = () => dispatch => {
    setTimeout(() => dispatch(increase()), 1000);
};