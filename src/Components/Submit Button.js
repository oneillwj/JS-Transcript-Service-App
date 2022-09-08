import * as React from 'react';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { blueGrey } from '@mui/material/colors';
import TextEnterBox from './TextEnterBox';
//import IgnoreTextBox from './IgnoreTextBox';

const main = blueGrey[700];


const handleClick = () => {

  console.log("Button has been clicked!!");
  //I think I need to connect these functions to their useState/handleChange functions
  //TextEnterBox()
  //IgnoreTextBox()
  //then need to figure out how to use this information into my axios.post call
  //maybe instead of it being uptop we put it in the post call itself
  //or change the names to textenterboxhandler and then send it to POST
  const submittedEnteredTextBox = TextEnterBox;
  //const submittedIgnoreTextBox = IgnoreTextBox;

  //POST call
  axios.post(
    //reaching out to the springboot server
    '/transcribe',
    //where we put in the data
    {ignoreText: ["please"], text: [submittedEnteredTextBox]},
    {
      //"meta-data" (conditions for information needed to and from(expectations))
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    },
  )
  .then((response) => {console.log(response)})
  .catch((error) => {console.log(error)});

  };

export default function SubmitButton() {
  return (
    <Grid container justifyContent="center"sx={{
      backgroundColor: main
    }}>
        <Button
            size="medium"
            variant="contained"
            color="primary"
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent:"center",
            }}
            onClick={handleClick} 
            >
          Here We Go
        </Button>
    </Grid>
    
  );
}