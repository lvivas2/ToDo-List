import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField, IconButton, Paper, InputBase } from "@mui/material";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <Box>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Buscar"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
}
export { TodoSearch };
