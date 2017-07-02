import * as actionType from '../actions/actionTypes'
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    byId: {},
    params: {}
});


export default function courseReducer(state= initialState, action) {
    switch (action.type) {
        case actionType.LOAD_COURSES_SUCCESS:
            return action.courses;

        case actionType.LOAD_COURSE_SUCCESS:
            return state.merge({
                params: action.payload.params || {},
                byId: action.payload.byId || {}
            });

        default:
            return state;
    }
}