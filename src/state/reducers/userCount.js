import {
    FETCH_USER_COUNT_SUCCESS,
    FETCH_USER_COUNT_FAILURE,
} from '../actions/user'

const initialState = null

export default function (state = initialState, action) {

    switch (action.type) {
        case FETCH_USER_COUNT_SUCCESS:
            return action.userCount

        case FETCH_USER_COUNT_FAILURE:
            return null

        default:
            return state
    }
}
