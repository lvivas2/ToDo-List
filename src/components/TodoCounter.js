import * as React from "react";
import Divider from "@mui/material/Divider";
import { Box, List, Typography, ListItem } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const styles = {
  strikethrough: {
    textDecoration: "line-through",
    marginLeft: "20px",
  },
};

function TodoCounter({ total, completed }) {
  const [open, setOpen] = React.useState(false);
  const [totalTodo, setTotalTodo] = React.useState([]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Divider sx={{ width: "100%" }} />
      <List sx={{ width: "100%" }}>
        <ListItemButton onClick={handleClick}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <h3
              style={{
                margin: 0,
                color: "#363636",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                width: "100%",
              }}
            >
              Done tasks <span>({completed})</span> to <span>({total})</span>
            </h3>
          </Box>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ marginLeft: "15px" }}>
            <ListItem>
              <TaskAltIcon sx={{ color: "rgba(135, 133, 246, 1)" }} />
              <a style={styles.strikethrough} variant="body1">
                Elemento 1
              </a>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </>
  );
}
export { TodoCounter };
