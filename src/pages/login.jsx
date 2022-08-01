import React from "react";
import Box from "@mui/material/Box";
import TextField  from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login=()=>{
    return (
        <>
        <Box component="form" sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">
            <div>
            <TextField  label="Username" id="username " size="small">  </TextField>
            </div>
            <div>
            <TextField  label="Password" id="password " type="password" size="small">  </TextField>

            </div>
            <Button> Login </Button>
        </Box>
        
        
        </>
    )

};


export default Login;