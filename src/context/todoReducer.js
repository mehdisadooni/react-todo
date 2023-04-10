export default (state,action) => {
    switch (action.type){
        case 'SET_TODOS':
            console.log(action)
            return {
                ...state,
                todos:action.payload
            }
        default:
            return state
    }
}