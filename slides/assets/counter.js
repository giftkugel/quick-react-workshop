import React, { Component } from "react";

export default class Counter extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			count: 0
		};
	}

	countClicks = () => {
		this.setState({
			count: ++this.state.count
		});
	}

	render() {
		return (
			<div>
				<span>Clicked {this.state.count}</span>&nbsp;<button onClick={this.countClicks}>Click me!</button>
			</div>
		);
	}
}