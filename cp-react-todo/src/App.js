import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";

import "./App.css";
import Todo from "./Todo";

import db from "./firebase";
import { collection, addDoc, onSnapshot, Timestamp } from "firebase/firestore";

function App() {
  const [toDos, setToDos] = useState([]);

  const [input, setInput] = useState("");

  // when the app loads, we need to listen to the datbase and fetch new todos as they get added/ removed
  useEffect(() => {
    onSnapshot(collection(db, "todos"), (snapshot) => {
      setToDos(snapshot.docs.map((doc) => doc.data().task));
    });
  }, []);

  const addTodo = async (event) => {
    // this will fire off when we click the button
    event.preventDefault();

    await addDoc(collection(db, "todos"), {
      task: input,
      created_at: Timestamp.fromDate(new Date()),
    });

    setToDos([...toDos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello world!! 🚀</h1>

      <form>
        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
          disabled={!input}
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {toDos.map((toDo) => (
          // <li>{toDo} </li>
          <Todo toDo={toDo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
