import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { blueGrey } from '@mui/material/colors';
//import { PropTypes } from 'prop-types';

const main = blueGrey[700];
const mainLight = blueGrey[200];

function handleChange(event){
  console.log(event.target.value);
}

export default function TextEnterBox() {
  return (
    <Box
      component="form"
      sx={{ 
        '& .MuiTextField-root': { m: 1, width: '50ch'},
        boxShadow: 0,
        p: 1,
        backgroundColor: main
      }}>

      <TextField 
      id="outlined-multiline-flexible" 
      label="Enter Transcript Here" 
      //style of the textbox
      variant="outlined"
      //changes the color of the textbox outline
      multiline
      //max rows allowed to be entered until it uses the scroll bar
      maxRows={6}
      color= "primary"
      sx={{
        backgroundColor: mainLight,
      }}
      //on change when text is entered save that as state
      onChange={handleChange}
      />

      
    </Box>
  );
}

