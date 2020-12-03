export default function counter(state = 0, action) {
  console.log(action.type);
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      default:
        return state
    }
  }
  