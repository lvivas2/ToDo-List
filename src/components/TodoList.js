import List from "@mui/material/List";

function TodoList({ children }) {
  return (
    <List sx={{ marginBottom: "10px", maxHeight: "90%", overflow: "auto" }}>
      {children}
    </List>
  );
}
export { TodoList };
