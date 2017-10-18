import React, {Component} from 'react';
import TodoItem from './todoitem';
import TodoForm from './todoform';

export default class TodoList extends React.Component {

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