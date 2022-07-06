function reducer(state, action) {
  try {
    if (action.type === 'current') {
      return {
        ...state,
      }
    }

    if (action.type === 'next') {
      if (state.counter >= 3) {
        return {
          ...state,
          counter: 0,
        }
      } else {
        return {
          ...state,
          counter: state.counter + action.payload,
        }
      }
    }

    if (action.type === 'prev') {
      if (state.counter <= 0) {
        return {
          ...state,
          counter: 3,
        }
      } else {
        return {
          ...state,
          counter: state.counter - action.payload,
        }
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export default reducer
