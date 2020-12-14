import * as actionTypes from '../actions/actionTypes'

const initialState={
    list:[],
    id:0
};


const listReducer = (state=initialState,action) =>{
    switch (action.type) {
        case actionTypes.GET_VALUES:
            return{
                ...state,
                list: action.payload
            };

        case actionTypes.GET_ID:
            return{
                id:action.payload
            }
            
        default:
            return state;
    
    }
}

export default listReducer;