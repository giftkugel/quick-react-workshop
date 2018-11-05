import React, {Component} from 'react';

export default class TodoItem extends React.Component {
	
	handleClick = () => {
		this.props.onRemove(this.props.item.key);
	}

	render() {
		return (
			<li key={this.props.item.key} onClick={this.handleClick}>{this.props.item.value}</li>			
		);
	}
}