module.exports = (state, { type, payload }) => {
  switch (type) {
    case 'CHANGE_ROUTE':
      return { ...state, route: payload }
    default:
      return state
    }
  }
