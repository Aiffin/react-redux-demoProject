import { ActionTypes } from "../types/productTypes";

const initialState = {
    products:[]
};

export const productReducers=(state=initialState,action)=>{
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:action.payload};

            case ActionTypes.FETCH_PRODUCTS:
                return {...state,products:action.payload};
    
        default:
            return state;
    }
}

export const selectProductReducer=(state={},action)=>{
    switch (action.type) {
        case ActionTypes.SELECT_PRODUCT:
            return {...state,...action.payload};

        case ActionTypes.REMOVE_PRODUCT:
            return {};
    
        default:
            return state;
    }
}
