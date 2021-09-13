import React from "react";

import "./Todo.css";

import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  //   Avatar,
} from "@material-ui/core";

// import { ImageIcon } from "@material-ui/icons";

function Todo(props) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar>
          {/* <Avatar>
            <ImageIcon />
          </Avatar> */}
        </ListItemAvatar>
        <ListItemText primary={props.toDo} secondary="Dummy Deadline ⏰" />
      </ListItem>
    </List>
  );
}

export default Todo;
