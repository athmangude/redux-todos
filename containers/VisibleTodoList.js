import { connect } from 'react-redux';
import {toggleTodo} from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    // tells us how to transform the current redux store state into the props
    // you want to pass into a presentational component you are wrapping
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter);
    }
}

const mapDispatchToProps = (dispatch) => {
    // receives the dispatch() method and returns callback props that you want
    // to inject into the presentational component
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
