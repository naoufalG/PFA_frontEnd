import React from "react";
import { View, Text, Pressable } from "react-native";
import Button from "./Button";
import styles from "./styles";
import { tasksRef, tasksRefP } from "../constants/reference";
import { withNavigation } from "react-navigation";

export default class TaskListItem extends React.Component {
  toggleChecked = () => {
    if (this.props.page === "tache") {
      const { key, checked } = this.props.task;
      tasksRef.child(key).update({ checked: !checked });
    } else if (this.props.page === "projet") {
      const { key, checked } = this.props.task;
      tasksRefP.child(key).update({ checked: !checked });
    }
  };

  toggleStarred = () => {
    if (this.props.page === "tache") {
      const { key, starred } = this.props.task;
      tasksRef.child(key).update({ starred: !starred });
    } else if (this.props.page === "projet") {
      const { key, starred } = this.props.task;
      tasksRefP.child(key).update({ starred: !starred });
    }
  };

  deleteTask = () => {
    if (this.props.page === "tache") {
      const { key } = this.props.task;
      tasksRef.child(key).remove();
    } else if (this.props.page === "projet") {
      const { key } = this.props.task;
      tasksRefP.child(key).remove();
    }
  };

  render() {
    const { task } = this.props;
    const page = this.props.page;
    const checkedText = task.checked ? styles.TaskListItem_Checked : "";
    let buttonRight;
    if (task.checked) {
      buttonRight = (
        <Button onPress={this.deleteTask} name="delete" color="#d0011b" />
      );
    } else if (task.starred) {
      buttonRight = (
        <Button onPress={this.toggleStarred} name="star" color="#f8e81c" />
      );
    } else {
      buttonRight = (
        <Button
          onPress={this.toggleStarred}
          name="star-border"
          color="#9b9b9b"
        />
      );
    }

    return (
      <View style={styles.TaskListItem}>
        <Button
          onPress={this.toggleChecked}
          name={task.checked ? "check-box" : "check-box-outline-blank"}
          color="#9b9b9b"
        />

        <View style={styles.TaskListItem_TextContainer}>
          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <Text style={[styles.TaskListItem_Text, checkedText]}>
              {task.text}
            </Text>
          </Pressable>
        </View>

        {buttonRight}
      </View>
    );
  }
}
