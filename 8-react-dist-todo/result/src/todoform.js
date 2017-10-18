import React, {Component} from 'react';

export default class TodoForm extends React.Component {

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