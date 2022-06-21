import React, { Component } from "react";
import { defaultValueTask, initialTasks } from "./constant/common";
import Header from "./components/Header";
import List from "./components/List";
import Hr from "./components/Hr/hr";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Input from "./components/add-task-wrapper/Input";
import ButtonPluss from "./components/add-task-wrapper/ButtonPlus";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      listTasks: initialTasks,
      inputTaskType: "",
    };
    this.handleChangeInputTask = this.handleChangeInputTask.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleCompleteTask = this.handleCompleteTask.bind(this);
  }

  handleChangeInputTask(e) {
    this.setState({
      inputTaskType: e.target.value,
    });
  }

  handleAddTask() {
    if (!this.state.inputTaskType.trim()) {
      this.setState({
        inputTaskType: "",
      });
      return;
    }

    const newTask = {
      ...defaultValueTask,
      id: new Date().getTime(),
      taskName: this.state.inputTaskType,
    };

    this.setState((prevState) => {
      return {
        ...prevState,
        listTasks: [newTask, ...prevState.listTasks],
        inputTaskType: "",
      };
    });
  }

  handleDeleteTask(id) {
    const listTasks = [...this.state.listTasks];
    const indexDelete = listTasks.findIndex((task) => task.id === id);
    if (indexDelete !== -1) {
      listTasks.splice(indexDelete, 1);
      this.setState({
        listTasks: [...listTasks],
      });
    }
  }

  handleCompleteTask(id) {
    const listTasks = [...this.state.listTasks];
    const indexUpdate = listTasks.findIndex((task) => task.id === id);
    if (indexUpdate !== -1) {
      const taskReplace = {
        ...listTasks[indexUpdate],
        isCompleted: true,
      };
      listTasks.splice(indexUpdate, 1, taskReplace);
      this.setState({
        listTasks: listTasks,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header title={"TO DO LIST APPLICATION"} />
        <div className="add-task-wrapper">
          <Input
            handleChangeInputTask={this.handleChangeInputTask}
            value={this.state.inputTaskType}
          />
          <ButtonPluss onClick={this.handleAddTask} />
        </div>
        <Hr fullWidth />
        <List
          taskLists={this.state.listTasks}
          handleDeleteTask={this.handleDeleteTask}
          handleCompleteTask={this.handleCompleteTask}
        />
        <Hr fullWidth />
        <Footer />
      </div>
    );
  }
}
