import {actionType} from './action-type';

const intialState = [];

const empReducer = (state= intialState, action)=>{
    const {type, payload} = action;
    switch (type) {
        case actionType.CREATE_EMP: 
            return [...state, payload]
        case actionType.LIST_EMP :
            return payload;
        case actionType.UPDATE_EMP:
            return state.map((item)=>{
                if(item.id === payload.id){
                    return{
                        ...item,
                        ...payload,
                    }
                }else{
                    return item;
                }
                
            })
        case actionType.DELETE_EMP:
            return state.filter( id => id !== payload.id);
        default :
        return state;
    }
}
export default empReducer;