import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function CreateTodoButton() {
  return (
    <>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </>
  );
}

export { CreateTodoButton };
