import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchItems(action) {
    try {

        // const config = {
        //     headers: { 'Content-Type': 'application/json' },
        //     withCredentials: true,
        // };

        // send the action.payload as the body
        // the config includes credentials which
        // allow the server session to recognize the user
        const shelfResponse = yield axios.get('/api/shelf');

        // after the user has logged in
        // get the user information from the server
        yield put({ type: 'SET_ITEM', payload: shelfResponse.data });
    } catch (error) {
        console.log('Error with getting items:', error);
    }
}

function* addItem(action) {
    try {
        yield axios.post('/api/shelf', action.payload);
        yield put({type: 'FETCH_ITEM'})
    } catch (error) {
        console.log('Error with adding item', error);
    }
}

function* deleteItem(action) {
    try{
        yield axios.delete(`/api/shelf/${action.payload}`)
        yield put({type: 'FETCH_ITEM'})
    }catch(error) {
        console.log('Error deleting item', erro);
    }
}

function* itemSaga() {
    yield takeLatest('FETCH_ITEM', fetchItems);
    yield takeLatest('ADD_ITEM', addItem);
    yield takeLatest('DELETE_ITEM', deleteItem);
}

export default itemSaga;