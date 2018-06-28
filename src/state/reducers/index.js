import { combineReducers } from 'redux'
import loaders from './loaders'
import user from './user'
import userCount from './userCount'
import group from './group'
import groups from './groups'
import groupUsers from './groupUsers'
import groupRanking from './groupRanking'
import predictions from './predictions'
import ranking from './ranking'
import submenu from './submenu'

export default combineReducers({
    loaders,
    user,
    userCount,
    group,
    groups,
    groupUsers,
    groupRanking,
    predictions,
    ranking,
    submenu,
})
