import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItems";
import { CreateTodoButton } from "./CreateTodoButton";
import { Box } from "@mui/material";
import backgroundImage from "../img/backgroundImage.png";

const defaultTodos = [
  { id: 1, text: "Cortar cebolla", completed: true },
  { id: 2, text: "Tomar el Curso de Intro a React.js", completed: false },
  { id: 3, text: "Llorar con la Llorona", completed: true },
  { id: 4, text: "Comer cereal", completed: false },
  { id: 5, text: "Hacer el amuerzo", completed: true },
  { id: 6, text: "Limpiar", completed: true },
];

function Componnents() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completeTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  // ToDos por completar
  const tasksTodo = todos.filter((todo) => !todo.completed).length;

  const todoCompleted = (text) => {
    const updateTodo = [...todos];
    const todoIndex = updateTodo.findIndex((todo) => todo.text == text);

    updateTodo[todoIndex].completed = true;
    setTodos(updateTodo);
  };

  const todoDelete = (text) => {
    const updateTodo = [...todos];
    const todoIndex = updateTodo.findIndex((todo) => todo.text == text);

    updateTodo.splice(todoIndex, 1);
    setTodos(updateTodo);
  };

  const filteredItems = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

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
            overflow: "auto",
            gridTemplateRows: "auto 1fr auto auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "10px",
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
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </Box>
          <TodoList>
            {filteredItems.length ? (
              filteredItems.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  searchValue={searchValue}
                  onComplete={() => todoCompleted(todo.text)}
                  onDelete={() => todoDelete(todo.text)}
                />
              ))
            ) : (
              <h3>Sin coincidencia</h3>
            )}
          </TodoList>
          <TodoCounter completed={completeTodos} total={totalTodos} />
          <CreateTodoButton />
        </Box>
      </Box>
    </>
  );
}

export default Componnents;
