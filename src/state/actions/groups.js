import {
    fetchUserGroups as apiFetchUserGroups,
    fetchGroup as apiFetchGroup,
    fetchGroupUsers as apiFetchGroupUsers,
    createGroup as apiCreateGroup,
    updateGroup as apiUpdateGroup,
    deleteGroup as apiDeleteGroup,
} from '../../WebApi'

export const FETCH_USER_GROUPS = 'FETCH_USER_GROUPS'
function fetchUserGroupAttempt() {
    return {
        type: FETCH_USER_GROUPS,
    }
}

export const FETCH_USER_GROUPS_SUCCESS = 'FETCH_USER_GROUPS_SUCCESS'
function fetchUserGroupsSuccess(groups) {
    return {
        type: FETCH_USER_GROUPS_SUCCESS,
        groups,
    }
}

export const FETCH_USER_GROUPS_FAILURE = 'FETCH_USER_GROUPS_FAILURE'
function fetchUserGroupsFailure() {
    return {
        type: FETCH_USER_GROUPS_FAILURE,
    }
}

export function fetchUserGroups() {

    return (dispatch) => {

        dispatch(fetchUserGroupAttempt())

        apiFetchUserGroups()
            .then((groups) => dispatch(fetchUserGroupsSuccess(groups)))
            .catch(() => dispatch(fetchUserGroupsFailure()))
    }
}

export const FETCH_GROUP = 'FETCH_GROUP'
function fetchGroupAttempt() {
    return {
        type: FETCH_GROUP,
    }
}

export const FETCH_GROUP_SUCCESS = 'FETCH_GROUP_SUCCESS'
function fetchGroupSuccess(group) {
    return {
        type: FETCH_GROUP_SUCCESS,
        group,
    }
}

export const FETCH_GROUP_FAILURE = 'FETCH_GROUP_FAILURE'
function fetchGroupFailure() {
    return {
        type: FETCH_USER_GROUPS_FAILURE,
    }
}

export function fetchGroup(groupId) {

    return (dispatch) => {

        dispatch(fetchGroupAttempt())

        if (groupId === 'general') {
            return dispatch(fetchGroupSuccess({id: groupId, name: groupId}))
        }

        apiFetchGroup(groupId)
            .then((group) => dispatch(fetchGroupSuccess(group)))
            .catch(() => dispatch(fetchGroupFailure()))
    }
}

export const FETCH_GROUP_USERS = 'FETCH_GROUP_USERS'
function fetchGroupUsersAttempt() {
    return {
        type: FETCH_GROUP_USERS,
    }
}

export const FETCH_GROUP_USERS_SUCCESS = 'FETCH_GROUP_USERS_SUCCESS'
function fetchGroupUsersSuccess(groupUsers) {
    return {
        type: FETCH_GROUP_USERS_SUCCESS,
        groupUsers,
    }
}

export const FETCH_GROUP_USERS_FAILURE = 'FETCH_GROUP_USERS_FAILURE'
function fetchGroupUsersFailure() {
    return {
        type: FETCH_USER_GROUPS_FAILURE,
    }
}

export function fetchGroupUsers(groupId) {

    return (dispatch) => {

        dispatch(fetchGroupUsersAttempt())

        return apiFetchGroupUsers(groupId)
            .then((groupUsers) => dispatch(fetchGroupUsersSuccess(groupUsers)))
            .catch(() => dispatch(fetchGroupUsersFailure()))
    }
}

export const CREATE_GROUP = 'CREATE_GROUP'
function createGroupAttempt(group) {
  return {
    type: CREATE_GROUP,
    group,
  }
}

export const CREATE_GROUP_SUCCESS = 'CREATE_GROUP_SUCCESS'
function createGroupSuccess(group) {
  return {
    type: CREATE_GROUP_SUCCESS,
    group,
  }
}

export const CREATE_GROUP_FAILURE = 'CREATE_GROUP_FAILURE'
function createGroupFailure() {
  return {
    type: CREATE_GROUP_FAILURE,
  }
}

export function createGroup(group) {

  return (dispatch) => {

    dispatch(createGroupAttempt(group))

    return apiCreateGroup(group)
      .then((createdGroup) => dispatch(createGroupSuccess(createdGroup)))
      .catch(() => dispatch(createGroupFailure()))
  }
}

export const UPDATE_GROUP = 'UPDATE_GROUP'
function updateGroupAttempt(group) {
    return {
        type: UPDATE_GROUP,
        group,
    }
}

export const UPDATE_GROUP_SUCCESS = 'UPDATE_GROUP_SUCCESS'
function updateGroupSuccess(group) {
    return {
        type: UPDATE_GROUP_SUCCESS,
        group,
    }
}

export const UPDATE_GROUP_FAILURE = 'UPDATE_GROUP_FAILURE'
function updateGroupFailure() {
    return {
        type: UPDATE_GROUP_FAILURE,
    }
}

export function updateGroup(group) {

    return (dispatch) => {

        dispatch(updateGroupAttempt(group))

        return apiUpdateGroup(group)
            .then((updatedGroup) => dispatch(updateGroupSuccess(updatedGroup)))
            .catch(() => dispatch(updateGroupFailure()))
    }
}

export const DELETE_GROUP = 'DELETE_GROUP'
function deleteGroupAttempt(group) {
    return {
        type: DELETE_GROUP,
        group,
    }
}

export const DELETE_GROUP_SUCCESS = 'DELETE_GROUP_SUCCESS'
function deleteGroupSuccess() {
    return {
        type: DELETE_GROUP_SUCCESS,
    }
}

export const DELETE_GROUP_FAILURE = 'DELETE_GROUP_FAILURE'
function deleteGroupFailure(group) {
    return {
        type: UPSERT_GROUP_FAILURE,
        group,
    }
}

export function deleteGroup(group) {

    return (dispatch) => {

        dispatch(deleteGroupAttempt(group))

        return apiDeleteGroup(group.id)
            .then(() => dispatch(deleteGroupSuccess()))
            .catch(() => dispatch(deleteGroupFailure(group)))
    }
}
