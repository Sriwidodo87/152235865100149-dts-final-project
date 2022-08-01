import React from "react";
import {Link} from "react-router-dom";
import { Box } from "@mui/material";
import Button  from '@mui/material/Button';

function Header() {
  return (
    <Box sx={{ width: 1, height:75 ,backgroundColor: 'primary.dark'}}>
      <nav> 
      <Button variant="contained"><Link activeClassName="active" to="/" style={{color:"white"}}>Home</Link> </Button>   
      <Button variant="contained"><Link  to="/product" style={{color:"white"}}>Product</Link>  </Button>  
      <Button variant="contained"><Link  to="/login" style={{color:"white"}}>Login</Link></Button> 
      </nav>
    </Box>
  );
}
export default Header;

