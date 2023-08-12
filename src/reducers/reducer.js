import {SUCCESS_PRODUCT, SUCCESS_USERS} from '../actions/actions'

const productState={
    product:[]
}
export const productReducer =(state=productState,action)=>{
    switch(action.type){
        case SUCCESS_PRODUCT:
            return{
                ...state,product:action.product
            }
        default:
            return state
    }

}
const userState={
    users:[]
}
export const usersReducer =(state=userState,action)=>{
    switch(action.type){
        case SUCCESS_USERS:
            return{
                ...state,users:action.users
            }
        default:
            return state
    }

}


export default {productReducer,usersReducer};