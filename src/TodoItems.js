import React, { Component } from "react";
import Typography from '@material-ui/core/Typography'

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }
  createTasks(item) {
    return <li onClick={() => this.delete(item.key)}
      key={item.key}>{item.text}</li>
  }
  delete(key) {
    this.props.delete(key);
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <div>
        <Typography variant='display1' align='center' gutterBottom>
          Items
        </Typography>
        <ul className="theList">
          {listItems}
        </ul>
      </div>
    );
  }
};

export default TodoItems;