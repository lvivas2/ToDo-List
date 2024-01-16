import { useState } from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Menu, MenuItem } from "@mui/material";

const styleTodoItems = {
  display: "flex",
  width: "328px",
  padding: "16px",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "16px",
  background: "#FFF",
  boxShadow: "1px 1px 8px 0px rgba(0, 0, 0, 0.25)",
  margin: "10px",
};

const styles = {
  strikethrough: {
    textDecoration: "line-through",
  },
};

function TodoItem({ text, completed, searchValue }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelate = () => {
    // Lógica para la acción 1
    handleClose();
  };

  return (
    <li style={styleTodoItems}>
      <span>
        {completed ? (
          <IconButton disabled>
            <TaskAltIcon sx={{ color: "rgba(135, 133, 246, 1)" }} />
          </IconButton>
        ) : (
          <IconButton>
            <TaskAltIcon sx={{ color: "rgba(204, 204, 204, 1)" }} />
          </IconButton>
        )}
      </span>
      <p>
        {completed ? <a style={styles.strikethrough}>{text}</a> : <a>{text}</a>}
      </p>
      <span>
        <IconButton
          aria-controls="menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon sx={{ color: "rgba(204, 204, 204, 1)" }} />
        </IconButton>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleDelate}>
            <DeleteIcon
              fontSize="small"
              sx={{ color: "rgba(204, 204, 204, 1)", marginRight: "5px" }}
            />{" "}
            Delate
          </MenuItem>
        </Menu>
      </span>
    </li>
  );
}
export { TodoItem };
