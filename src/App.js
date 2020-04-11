import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      nextTodo: {
        name: "",
        des: ""
      },
      list: [{ name: "shubham", des: "heya" }, { name: "goyal", des: "bye" }]
    };
  }
  updateTodo(field, e) {
    let nextTodo = Object.assign({}, this.state.nextTodo);
    nextTodo[field] = e.target.value;
    this.setState({
      nextTodo: nextTodo
    });
  }
  addTodo(e) {
    let list = Object.assign([], this.state.list);
    list.push(this.state.nextTodo);
    this.setState({
      list: list,
      nextTodo: {
        name: "",
        des: ""
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-4">
          <h2> todo list</h2>
          <ol>
            {this.state.list.map((item, i) => {
              return <li key={i}>{item.name}</li>;
            })}
          </ol>
          <input
            value={this.state.nextTodo.name}
            onChange={this.updateTodo.bind(this, "name")}
            className="form-control"
            type="text"
            placeholder="Name"
          />
          <input
            value={this.state.nextTodo.des}
            onChange={this.updateTodo.bind(this, "des")}
            className="form-control"
            type="text"
            placeholder="Des"
          />
          <button onClick={this.addTodo.bind(this)}>AddTodo</button>
        </div>
      </div>
    );
  }
}
export default App;
