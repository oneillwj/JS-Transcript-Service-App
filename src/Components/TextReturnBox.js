import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function TextReturnBox() {
  return (
    <Box
      component="form"
      sx={{ 
        '& .MuiTextField-root': { m: 4, width: '50ch'},
        boxShadow: 5,
        p: 1
      }}>

      <TextField 
      id="outlined-multiline-flexible" 
      label="Transcript Results" 
      //style of the textbox
      variant="outlined"
      //changes the color of the textbox outline
      color= "success"
      multiline
      //max rows allowed to be entered until it uses the scroll bar
      maxRows={6}
      disabled="true"
      />

      
    </Box>
  );
}