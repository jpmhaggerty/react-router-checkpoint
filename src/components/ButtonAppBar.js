import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'yellow'
};

export default function ButtonAppBar({title}) {
  return (
    <Box sx={{ flexGrow: 1, width: 1 }}>
      <AppBar position="static" sx={{bgcolor: "#000000"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button color="inherit">
            <Link to="/home" style={linkStyle}>Home</Link>
          </Button>
          <Button color="inherit">
            <Link to="/profiles" style={linkStyle}>Profiles</Link>
          </Button>
          <Button color="inherit">
            <Link to="/about" style={linkStyle}>About</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
