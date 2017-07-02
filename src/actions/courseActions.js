import * as actionType from './actionTypes'

export function loadCourses (payload) {
    return {type: actionType.LOAD_COURSES, payload}
}

export function loadCoursesSuccess (courses, params) {
    return {type: actionType.LOAD_COURSES_SUCCESS, payload: {courses, params}}
}


export function loadCourse(payload) {
    return {type: actionType.LOAD_COURSES, payload};
}

export function loadCourseSuccess(payload) {
    const byId = {"token": payload};
    return {type: actionType.LOAD_COURSES_SUCCESS, payload: {byId}};
}
