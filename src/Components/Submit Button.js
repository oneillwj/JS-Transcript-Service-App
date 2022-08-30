import * as React from 'react';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { blueGrey } from '@mui/material/colors';

const main = blueGrey[700];

const handleClick = () => {

  console.log("Button has been clicked!!");

  //POST call
  axios.post(
    //reaching out to the springboot server
    'http://localhost:8080/transcribe',
    //where we put in the data
    {ignoreText: ["the", "his"], text: "The turkey stubbed his toe on the stump."},
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