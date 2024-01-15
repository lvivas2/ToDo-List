import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItems";
import { CreateTodoButton } from "./CreateTodoButton";
import { Box } from "@mui/material";
import backgroundImage from "../img/backgroundImage.png";
import { useState } from "react";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el Curso de Intro a React.js", completed: false },
  { text: "Llorar con la Llorona", completed: false },
  { text: "Hacer el amuerzo", completed: true },
];

function Componnents() {
  const [searchState, setSearchState] = React.useState();

  console.log("Esto es lo que escribiste " + searchState);
  return (
    <>
      <Box
        height={"100vh"}
        sx={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
          display: "grid",
        }}
      >
        <Box
          sx={{
            background: "#37E7FF",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
            display: "grid",
            padding: "0px 25px 25px 25px",
            borderRadius: "25px",
            background: `url(${backgroundImage})`,
            backgroundSize: "cover",
            boxShadow: "1px 1px 8px 0px rgba(0, 0, 0, 0.25)",
            height: "90vh",
          }}
        >
          <h2
            style={{
              color: "#FFFF",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
            }}
          >
            Today’s task
          </h2>
          <TodoSearch
            searchState={searchState}
            setSearchState={setSearchState}
          />
          <TodoList>
            {defaultTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
              />
            ))}
          </TodoList>
          <TodoCounter completed={16} total={25} />
          <CreateTodoButton />
        </Box>
      </Box>
    </>
  );
}

export default Componnents;
