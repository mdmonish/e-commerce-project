import {call,put,takeEvery,all} from 'redux-saga/effects'
import { FETCH_PRODUCT,FETCH_USERS,SUCCESS_PRODUCT, SUCCESS_USERS } from "../actions/actions";

function productApi(){
    return fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(console.log('PRODUCTS'));
}

function* workerSagaProduct(){
    const product =  yield call(productApi);
    yield put({type:SUCCESS_PRODUCT,product});
}
function usersApi(){
    return fetch('https://fakestoreapi.com/users').then(res=>res.json()).then(console.log('USERS'));
}

function* workerSagaUsers(){
    const users =  yield call(usersApi);
    yield put({type:SUCCESS_USERS,users});
}

function* rootSagas(){
    yield all([takeEvery(FETCH_PRODUCT, workerSagaProduct),
    takeEvery(FETCH_USERS, workerSagaUsers)])
}

export default rootSagas;