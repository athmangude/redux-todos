import {VisibilityFilters} from './actions'

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, {
                    text: action.text,
                    completed: false
                }
            ];
        case COMPLETE_TODO:
            return Object.assign({}, todo, {
                completed: true
            });
        default:
            return state;
    }
}

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state;
    }
}

function todoApp(state = initialState, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos: todos(state.todos, action)
    }
}
