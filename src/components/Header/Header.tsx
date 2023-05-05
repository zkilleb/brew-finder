import './Header.css';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export function Header() {
  return (
    <Box className="Header" sx={{ flexGrow: 1 }} data-testid="Header">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Reading List
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
