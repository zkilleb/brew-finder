import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Box, Toolbar } from '@mui/material';

export function Header() {
  const location = useLocation();

  return (
    <Box className="Header" sx={{ flexGrow: 1 }} data-testid="Header">
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <img
              src="full_logo.png"
              width={75}
              height={60}
              alt="BrüFinder logo"
            />
          </Link>
          <Link
            className={
              location.pathname === '/breweries'
                ? 'HeaderElementSelected'
                : 'HeaderElement'
            }
            to="/breweries"
          >
            Find
          </Link>
          <Link
            className={
              location.pathname === '/about'
                ? 'HeaderElementSelected'
                : 'HeaderElement'
            }
            to="/about"
          >
            About
          </Link>
          <div className="RightLinksContainer">
            <Link
              className={
                location.pathname === '/join'
                  ? 'RightHeaderElementSelected'
                  : 'RightHeaderElement'
              }
              to="/join"
            >
              Join
            </Link>
            <Link
              className={
                location.pathname === '/login'
                  ? 'RightHeaderElementSelected'
                  : 'RightHeaderElement'
              }
              to="/login"
            >
              Login
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
