import React, { Component } from 'react';
import TodoItems from "./TodoItems";
import moment from 'moment';
import TextField from '@material-ui/core/TextField'

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			time: "08:00",
		};
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.handleTime = this.handleTime.bind(this);
	}

	addItem(e) {
		if (this._inputElement.value !== "") {
			let momentDate = moment(this.state.time, "HH:mm");
			var newItem = {
				text: this._inputElement.value,
				key: momentDate
			};

			this.setState((prevState) => {
				return {
					items: prevState.items.concat(newItem)
				};
			});

			this._inputElement.value = "";
		}

		console.log(this.state.items);
		e.preventDefault();
	}

	deleteItem(key) {
		var filteredItems = this.state.items.filter(function (item) {
			return (item.key !== key);
		});

		this.setState({
			items: filteredItems
		});
	}

	handleTime(event, time) {
		this.setState({ time: event.target.value });
	}

	render() {
		return (
			<div className="todoListMain">
				<div className="header">
					<form onSubmit={this.addItem}>
						<input ref={(a) => this._inputElement = a}
							placeholder="enter task">
						</input>
						<TextField
							id="time"
							type="time"
							defaultValue="08:00"
							className="dateTimePicker"
							onChange={this.handleTime}
							value={this.state.time}
							InputLabelProps={{
								shrink: true,
							}}
						/>
						<button type="submit">add</button>
					</form>
				</div>
				<TodoItems entries={this.state.items} delete={this.deleteItem} />
			</div>
		);
	}
}

export default TodoList