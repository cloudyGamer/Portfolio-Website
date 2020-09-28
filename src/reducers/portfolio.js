const portfolioReducerDefaultState = [];
 export default   (state = portfolioReducerDefaultState,action) => {
      switch(action.type){
           
          case 'HIGHLIGHT_PROJECT':
          return state.filter(({id}) => id !== action.id);
          
           default:
                  return state;
      }
};
