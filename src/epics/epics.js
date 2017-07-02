import axios from 'axios';
import querystring from 'querystring';
import { Observable } from 'rxjs/Observable';
import * as actionTypes from '../actions/actionTypes';
import * as postsActions from '../actions/courseActions';

export function loadCourse(action$) {
    return action$.ofType(actionTypes.LOAD_COURSE)
        .map(action => action.payload)
        .switchMap(id => {
            let url =  "http://52.168.6.76:8080/uncle/"+id.id;
            return Observable.fromPromise(
                axios.get(url)
            ).map(res => postsActions.loadCourseSuccess(res.data));
        });
}

export function loadCourses(action$) {
    return action$.ofType(actionTypes.LOAD_COURSES)
        .map(action => action.payload)
        .switchMap(params => {
            return Observable.fromPromise(
                axios.get( "http://52.168.6.76:8080/"+`uncles?${querystring.stringify(params)}`)
            ).map(res => postsActions.loadCoursesSuccess(res.data, params));
        });
}