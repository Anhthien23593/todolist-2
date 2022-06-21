import ButtonPluss from "../add-task-wrapper/ButtonPlus";
import Hr from "../Hr/hr";
import React, { Component } from "react";
import ListContent from "../List/Listcontent";
import "./list-task.css";

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { task, handleDeleteTask, handleCompleteTask } = this.props;
    return (
      <>
        <div className="list-item">
          <div>
            <ListContent
              content={task.taskName}
              isCompleted={task.isCompleted}
            />
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            {!task.isCompleted && (
              <ButtonPluss
                completed
                onClick={() => handleCompleteTask(task.id)}
              />
            )}
          </div>
        </div>
        <Hr fullWidth />
      </>
    );
  }
}
