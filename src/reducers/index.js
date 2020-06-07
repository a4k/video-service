import {combineReducers} from 'redux'
import films from './filmReducer'
import tv from './tvReducer'
import categories from './categoryReducer'
import comments from './commentReducer'
import user from './userReducer'

const rootReducer = combineReducers({
    films,
    tv,
    categories,
    comments,
    user,
});

export default rootReducer
