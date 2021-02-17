const itemReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_ITEM':
        return action.payload;
      case 'UNSET_ITEM':
        return [];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default itemReducer;