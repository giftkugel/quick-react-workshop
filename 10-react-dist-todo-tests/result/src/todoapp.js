import React, {Component} from 'react';
import TodoList from './todolist';

export default class TodoApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			todos: []
		}
	}

	addTodo = (value) => {
		let key = this.state.todos.length + 1;
		let newItem = {
			key: key,
			value: value
		};

		let newTodos;
		if (this.state.todos.length === 0) {
			newTodos = [newItem];
		} else {
			newTodos = [...this.state.todos,newItem];
		}

		this.setState({
			todos: newTodos
		});
		
	}

	removeTodo = (key) => {
		let currentIndex = -1;
		for (let index = 0; index < this.state.todos.length; index++) {
			let currentItem = this.state.todos[index];
			if (currentItem.key === key) {
				currentIndex = index;
				break;
			}
		}

		if (currentIndex > -1) {
			this.setState({
				todos: this.state.todos.slice(0, currentIndex).concat(this.state.todos.slice(currentIndex + 1))
			});
		}
	}

	render() {
		return (
			<TodoList todos={this.state.todos} onAdd={this.addTodo} onRemove={this.removeTodo} />
		);
	}
}