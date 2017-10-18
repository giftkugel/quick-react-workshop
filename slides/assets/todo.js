import React, { Component } from "react";

class TodoForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value: '',
			disabled: true
		}
	}

	handleChange = (event) => {
		this.setState({
			value: event.currentTarget.value
		});

		if (this.state.value && this.state.value.length >= 0) {
			this.setState({
				disabled: false
			});
		}
	}

	handleClick = () => {
		if (!this.state.value || this.state.value.length === 0 || this.state.value ==='') {
			return;
		}
		this.props.onAdd(this.state.value);
		this.setState({
			value: '',
			disabled: true
		});
	}

	render() {
		return (
			<div>
				<input name="todo" value={this.state.value} onChange={this.handleChange} />
				<button onClick={this.handleClick} disabled={this.state.disabled}>Add todo</button>
			</div>			
		);
	}
}

class TodoItem extends React.Component {
	
	handleClick = () => {
		this.props.onRemove(this.props.item.key);
	}

	render() {
		return (
			<li key={this.props.item.key} onClick={this.handleClick}>{this.props.item.value}</li>			
		);
	}
}

class TodoList extends React.Component {

	constructor(props) {
		super(props);
	}				

	render() {
		let list;
		if (this.props.todos.length >= 1) {
			list = this.props.todos.map((item) => {
				return <TodoItem item={item} key={item.key} onRemove={this.props.onRemove} />
			});
		}
		return (
			<div>
				<ul>
					{list}
				</ul>
				<TodoForm onAdd={this.props.onAdd} />
			</div>
		);
	}
}

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